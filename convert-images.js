// convert-images.js
// Converts all SVG files in assets/photos/generated to PNG using sharp.
// Usage:
//   npm install sharp
//   node convert-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, 'assets', 'photos', 'generated');
if (!fs.existsSync(srcDir)) {
  console.error('Source directory not found:', srcDir);
  process.exit(1);
}

(async () => {
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.svg'));
  if (files.length === 0) {
    console.log('No SVG files to convert.');
    return;
  }

  for (const file of files) {
    const svgPath = path.join(srcDir, file);
    const outName = file.replace(/\.svg$/i, '.png');
    const outPath = path.join(srcDir, outName);
    try {
      const svgBuffer = fs.readFileSync(svgPath);
      await sharp(svgBuffer)
        .png({ quality: 90 })
        .resize(1200, 800, { fit: 'inside' })
        .toFile(outPath);
      console.log('Converted', file, '→', outName);
    } catch (err) {
      console.error('Failed to convert', file, err.message);
    }
  }
})();
