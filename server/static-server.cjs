#!/usr/bin/env node
// Simple production-ready static server.
// CommonJS version so it can be run with Node when package.json uses "type": "module"

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = process.argv[2] || 'public';
const port = parseInt(process.argv[3], 10) || 8080;

function contentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.html': return 'text/html; charset=utf-8';
        case '.css': return 'text/css; charset=utf-8';
        case '.js': return 'application/javascript; charset=utf-8';
        case '.png': return 'image/png';
        case '.jpg': case '.jpeg': return 'image/jpeg';
        case '.svg': return 'image/svg+xml';
        case '.webp': return 'image/webp';
        case '.json': return 'application/json; charset=utf-8';
        default: return 'application/octet-stream';
    }
}

const server = http.createServer((req, res) => {
    try {
        // Normalize URL
        let urlPath = decodeURIComponent(req.url.split('?')[0]);

        // Map URL to file in root — strip leading slash to ensure path.join works
        const relativePath = urlPath.replace(/^\//, '');
        let filePath = path.join(root, relativePath);

        // If URL ends with '/', try index.html under that path
        if (urlPath.endsWith('/')) {
            const indexUnder = path.join(root, relativePath, 'index.html');
            if (fs.existsSync(indexUnder)) {
                const content = fs.readFileSync(indexUnder);
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
                return;
            }
        }

        // If file exists, serve it
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const content = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': contentType(filePath) });
            res.end(content);
            return;
        }

        // Fallback: try serving index.html from root
        const fallback = path.join(root, 'index.html');
        if (fs.existsSync(fallback)) {
            const content = fs.readFileSync(fallback);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
            return;
        }

        res.writeHead(404);
        res.end('Not found');
    } catch (err) {
        res.writeHead(500);
        res.end('Server error');
    }
});

server.listen(port, () => {
    console.log(`Static server serving "${root}" on http://localhost:${port}`);
});