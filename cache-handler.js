// cache-handler.js
const fs = require('fs');
const path = require('path');

const CACHE_DIR = path.join(__dirname, '.next/cache');

if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
}

module.exports = class CacheHandler {
    constructor(options) {
        this.options = options;
    }

    async get(key) {
        const filePath = path.join(CACHE_DIR, key);
        if (fs.existsSync(filePath)) {
            return fs.readFileSync(filePath, 'utf-8');
        }
        return null;
    }

    async set(key, data) {
        const filePath = path.join(CACHE_DIR, key);
        fs.writeFileSync(filePath, data, 'utf-8');
    }
};