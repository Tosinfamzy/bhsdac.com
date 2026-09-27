import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync, statSync } from "fs";
import { join, extname, basename } from "path";

const QUALITY = 80;
const SIZES = {
  hero: 1400,    // hero/banner images
  card: 800,     // card images, gallery
  thumb: 400,    // thumbnails
};

const SOURCE_DIRS = [
  { src: "src/assets/sabbath-photos", dest: "src/assets/optimized/sabbath", size: SIZES.card },
  { src: "src/assets/programs", dest: "src/assets/optimized/programs", size: SIZES.card },
  { src: "src/assets/convention", dest: "src/assets/optimized/convention", size: SIZES.hero },
];

const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

function getAllImages(dir) {
  const results = [];
  if (!existsSync(dir)) return results;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllImages(fullPath));
    } else if (IMAGE_EXTS.includes(extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImage(srcPath, destDir, maxWidth) {
  const name = basename(srcPath, extname(srcPath));
  const destPath = join(destDir, `${name}.webp`);

  if (existsSync(destPath)) {
    return { skipped: true, path: destPath };
  }

  await sharp(srcPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(destPath);

  const srcSize = statSync(srcPath).size;
  const destSize = statSync(destPath).size;
  const savings = ((1 - destSize / srcSize) * 100).toFixed(0);

  return { skipped: false, path: destPath, srcSize, destSize, savings };
}

async function main() {
  let totalSaved = 0;
  let totalProcessed = 0;

  for (const { src, dest, size } of SOURCE_DIRS) {
    const images = getAllImages(src);
    if (!images.length) continue;

    mkdirSync(dest, { recursive: true });

    console.log(`\n[${src}] → ${dest} (${images.length} images, max ${size}px)`);

    for (const img of images) {
      try {
        const result = await optimizeImage(img, dest, size);
        if (result.skipped) {
          process.stdout.write(".");
        } else {
          totalProcessed++;
          totalSaved += result.srcSize - result.destSize;
          process.stdout.write(`✓`);
        }
      } catch (err) {
        process.stdout.write("✗");
        console.error(`\n  Error: ${basename(img)}: ${err.message}`);
      }
    }
  }

  console.log(`\n\nDone! Processed ${totalProcessed} images.`);
  console.log(`Total savings: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
}

main();
