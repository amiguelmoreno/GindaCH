import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "../public");

const JOBS = [
  // Hero LCP image – 700w for mobile, 520w for desktop (served via <picture> media query)
  { src: "coche-petrica.png", width: 700, quality: 40 },
  { src: "coche-petrica.png", out: "coche-petrica-520.webp", width: 520, quality: 40 },
  // About image
  { src: "petrica.png", width: 520, quality: 82 },
  // Logo (used in header brand + intro overlay)
  { src: "logo-ginda copy.jpg", out: "logo-ginda.webp", width: 500, quality: 85 },
  // Foto casa
  { src: "foto-casa.jpeg", width: 900, quality: 82 },

  // Carousel – displayed max 454px desktop / 220px mobile → 500px @2x
  { src: "carrousel/carousel-1-exterior-modern.jpg",  width: 500, quality: 78 },
  { src: "carrousel/carousel-2-bedroom-white.jpg",    width: 500, quality: 78 },
  { src: "carrousel/carousel-3-showroom-wide.jpg",    width: 500, quality: 78 },
  { src: "carrousel/carousel-4-byd-wall.jpg",         width: 500, quality: 78 },
  { src: "carrousel/carousel-5-exterior-classic.jpg", width: 500, quality: 78 },
  { src: "carrousel/carousel-6-showroom-lounge.jpg",  width: 500, quality: 78 },

  // Before/After – 700w full (spaced paths ok for src=), 430w in /ba/ (no spaces = safe for srcset)
  { src: "proyectos Ginda antes y despues/casa-amarilla-antes.png",         width: 700, quality: 80 },
  { src: "proyectos Ginda antes y despues/casa-amarilla-antes.png",         out: "ba/casa-amarilla-antes-430.webp",         width: 430, quality: 80 },
  { src: "proyectos Ginda antes y despues/casa amarilla despues.jpeg",      width: 700, quality: 80 },
  { src: "proyectos Ginda antes y despues/casa amarilla despues.jpeg",      out: "ba/casa-amarilla-despues-430.webp",      width: 430, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada casa grande antes.png",   width: 700, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada casa grande antes.png",   out: "ba/fachada-casa-grande-antes-430.webp",   width: 430, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada casa grande despues.png", width: 700, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada casa grande despues.png", out: "ba/fachada-casa-grande-despues-430.webp", width: 430, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada piso antes.png",          width: 700, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada piso antes.png",          out: "ba/fachada-piso-antes-430.webp",          width: 430, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada piso despues.jpeg",       width: 700, quality: 80 },
  { src: "proyectos Ginda antes y despues/fachada piso despues.jpeg",       out: "ba/fachada-piso-despues-430.webp",       width: 430, quality: 80 },

  // Project examples – displayed up to ~377px desktop / 375px mobile → 800px @2x retina
  { src: "beispiel/example-1-house-classic.jpg",  width: 800, quality: 80 },
  { src: "beispiel/example-2-house-modern.jpg",   width: 800, quality: 80 },
  { src: "beispiel/example-3-showroom-lounge.jpg",width: 800, quality: 80 },
  { src: "beispiel/example-4-bedroom-white.jpg",  width: 800, quality: 80 },
  { src: "beispiel/example-5-showroom-wide.jpg",  width: 800, quality: 80 },
  { src: "beispiel/example-6-byd-wall.jpg",       width: 800, quality: 80 },
  { src: "beispiel/example-7-kitchen-blue.jpg",   width: 800, quality: 80 },
  { src: "beispiel/example-8-garage-red.jpg",     width: 800, quality: 80 },
  { src: "beispiel/example-9-living-dark.jpg",    width: 800, quality: 80 },
];

let converted = 0;
let saved = 0;

for (const job of JOBS) {
  const srcPath = path.join(PUBLIC, job.src);
  const ext = path.extname(job.src);
  const base = job.src.replace(ext, "");
  const outName = job.out || base + ".webp";
  const outPath = path.join(PUBLIC, outName);

  // Ensure output directory exists
  const outDir = path.dirname(outPath);
  if (!existsSync(outDir)) {
    await mkdir(outDir, { recursive: true });
  }

  try {
    const { size: sizeBefore } = await import("fs").then(
      (m) => new Promise((res, rej) => m.stat(srcPath, (e, s) => (e ? rej(e) : res(s))))
    );

    await sharp(srcPath)
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 5 })
      .toFile(outPath);

    const { size: sizeAfter } = await import("fs").then(
      (m) => new Promise((res, rej) => m.stat(outPath, (e, s) => (e ? rej(e) : res(s))))
    );

    const reduction = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    console.log(
      `✓ ${job.src} → ${outName}  ${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB  (-${reduction}%)`
    );
    saved += sizeBefore - sizeAfter;
    converted++;
  } catch (err) {
    console.error(`✗ ${job.src}: ${err.message}`);
  }
}

console.log(
  `\n✅ Converted ${converted} images. Total saved: ${(saved / 1024 / 1024).toFixed(2)} MB`
);
