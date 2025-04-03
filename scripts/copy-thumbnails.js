// scripts/copy-thumbnails.js
const fs = require("fs");
const path = require("path");

const sourcePath = path.resolve(__dirname, "../../packages/data/thumbnails");
const destPath = path.resolve(__dirname, "../dist/thumbnails");

if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
}

const files = fs.readdirSync(sourcePath);
for (const file of files) {
    const sourceFile = path.join(sourcePath, file);
    const destFile = path.join(destPath, file);
    if (fs.statSync(sourceFile).isFile()) {
        fs.copyFileSync(sourceFile, destFile);
    }
}
