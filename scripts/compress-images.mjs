import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;

const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImages(fullPath)));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compress(filePath) {
  const ext = extname(filePath).toLowerCase();
  const before = (await stat(filePath)).size;

  const image = sharp(filePath);
  let buffer;

  if (ext === '.png') {
    buffer = await image
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();
  } else if (ext === '.jpg' || ext === '.jpeg') {
    buffer = await image
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
  } else if (ext === '.webp') {
    buffer = await image
      .webp({ quality: 80 })
      .toBuffer();
  }

  if (buffer && buffer.length < before) {
    const { writeFile } = await import('fs/promises');
    await writeFile(filePath, buffer);
    const after = buffer.length;
    const saved = ((before - after) / before * 100).toFixed(1);
    console.log(`✓ ${basename(filePath).padEnd(45)} ${kb(before)} → ${kb(after)}  (-${saved}%)`);
  } else {
    console.log(`- ${basename(filePath).padEnd(45)} ya optimizada, sin cambios`);
  }
}

function kb(bytes) {
  return (bytes / 1024).toFixed(0).padStart(6) + ' KB';
}

const images = await getImages(PUBLIC_DIR);
console.log(`\nComprimiendo ${images.length} imágenes en public/...\n`);

for (const img of images) {
  await compress(img);
}

console.log('\nListo.');
