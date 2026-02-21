#!/usr/bin/env node
/**
 * Rewrites absolute paths in Next.js static export (out/) for GitHub Pages.
 * The site is served at username.github.io/Portfolio/ but the build outputs
 * paths like /_next/... and /about. This script prefixes them with /Portfolio.
 */
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'out');
const BASE_PATH = '/Portfolio';
const PLACEHOLDER = '__BASE_PATH_PLACEHOLDER__';

const EXTENSIONS = new Set(['.html', '.js', '.css', '.json']);

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
walk(OUT_DIR);
console.log('Base path rewrite complete.');
