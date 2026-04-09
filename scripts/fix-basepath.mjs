#!/usr/bin/env node
/**
 * Rewrites absolute paths in Next.js static export (out/) for GitHub Pages.
 * Post-processes HTML/CSS when SITE_BASE_PATH is set (e.g. github.io/repo/).
 * Custom domain at / uses SITE_BASE_PATH='' and typically needs no rewrites.
 */
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'out');
const BASE_PATH = process.env.SITE_BASE_PATH ?? '';
const PLACEHOLDER = '__BASE_PATH_PLACEHOLDER__';

// Only rewrite HTML and CSS. Do NOT rewrite .js: it breaks code (e.g. '"/"' becomes '"/Portfolio/"').
// Next.js build with basePath/assetPrefix already emits correct paths in JS bundles.
const EXTENSIONS = new Set(['.html', '.css']);

function rewriteContent(content) {
  // Avoid double-prefixing: temporarily replace existing base path
  let out = content
    .replace(/"\/Portfolio\//g, `"${PLACEHOLDER}`)
    .replace(/'\/Portfolio\//g, `'${PLACEHOLDER}`);
  // Prefix absolute paths: quote + slash, but not "/>" (tag close) or "Portfolio/" (already done)
  out = out
    .replace(/"\/(?!>)(?!Portfolio\/)/g, `"${BASE_PATH}/`)
    .replace(/'\/(?!>)(?!Portfolio\/)/g, `'${BASE_PATH}/`);
  // Restore protected paths
  out = out
    .replace(new RegExp(`"${PLACEHOLDER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'), `"${BASE_PATH}/`)
    .replace(new RegExp(`'${PLACEHOLDER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'), `'${BASE_PATH}/`);
  return out;
}

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!EXTENSIONS.has(ext)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const rewritten = rewriteContent(content);
  if (content !== rewritten) {
    fs.writeFileSync(filePath, rewritten, 'utf8');
    console.log('Updated:', path.relative(OUT_DIR, filePath));
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full);
    } else {
      processFile(full);
    }
  }
}

if (!fs.existsSync(OUT_DIR)) {
  console.error('out/ directory not found. Run pnpm build first.');
  process.exit(1);
}
if (!BASE_PATH) {
  console.log('SITE_BASE_PATH empty; skipping HTML/CSS rewrites.');
  process.exit(0);
}
walk(OUT_DIR);
console.log('Base path rewrite complete.');
