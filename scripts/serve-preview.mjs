#!/usr/bin/env node
/**
 * Serves the static export (out/). Match SITE_BASE_PATH to your build (e.g. '' for custom domain, /Portfolio for github.io/repo).
 */
import fs from 'fs';
import path from 'path';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'out');
const PORT = Number(process.env.PORT) || 3000;
const BASE = process.env.SITE_BASE_PATH || '';

function getPath(urlPath) {
  const decoded = decodeURIComponent(new URL(urlPath, 'http://x').pathname);
  if (!BASE) {
    const raw = decoded.split('?')[0] || '/';
    const trimmed = raw.replace(/\/$/, '') || '/';
    if (trimmed === '/') return path.join(OUT_DIR, 'index.html');
    const rel = trimmed.replace(/^\//, '');
    return path.join(OUT_DIR, rel);
  }
  if (decoded === BASE || decoded === BASE + '/') return path.join(OUT_DIR, 'index.html');
  if (decoded.startsWith(BASE + '/')) {
    const sub = (decoded.slice(BASE.length) || '/').split('?')[0];
    const rel = sub.replace(/^\//, '').replace(/\/$/, '') || '';
    if (!rel) return path.join(OUT_DIR, 'index.html');
    return path.join(OUT_DIR, rel);
  }
  return null;
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath);
  const types = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
  };
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      res.writeHead(500);
      res.end(String(err));
      return;
    }
    res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
    res.end(data);
  });
}

const server = createServer((req, res) => {
  const filePath = getPath(req.url);
  if (!filePath) {
    res.writeHead(404);
    const hint = BASE ? BASE + '/' : '/';
    res.end('Open http://localhost:' + PORT + hint + ' to preview the site.');
    return;
  }
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      if (stat && stat.isDirectory()) {
        const index = path.join(filePath, 'index.html');
        fs.access(index, (e) => {
          if (e) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            serveFile(res, index);
          }
        });
        return;
      }
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    serveFile(res, filePath);
  });
});

if (!fs.existsSync(OUT_DIR)) {
  console.error('out/ not found. Run: npm run build');
  process.exit(1);
}

server.listen(PORT, '127.0.0.1', () => {
  const url = 'http://127.0.0.1:' + PORT + (BASE || '') + (BASE ? '/' : '');
  console.log('Preview server running at ' + url);
  console.log('Open that URL in your browser to view the site.');
});
