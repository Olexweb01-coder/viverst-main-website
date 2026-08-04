/**
 * VIVERST — Brand asset pipeline
 * ---------------------------------------------------------------
 * Reads the two raw brand source files and automatically:
 *   1. Trims any transparent padding around the artwork
 *   2. Pads the favicon mark to a true square (centered, no stretch)
 *   3. Exports every icon size the site/browsers/OSes need
 *   4. Exports a clean, high-res, trimmed logo for the navbar/footer
 *   5. Writes favicon.ico and site.webmanifest
 *
 * Run this again any time you replace the source files:
 *   npm run icons
 *
 * Source files (replace these to update the brand mark):
 *   src/assets/brand/favicon-source.png   <- square-ish icon mark
 *   src/assets/brand/logo-source.png      <- wide wordmark logo
 *
 * Nothing here ever stretches an image — every resize preserves
 * the original aspect ratio ("contain" behavior), so the mark can
 * never come out distorted.
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src", "assets", "brand");
const PUBLIC_DIR = path.join(ROOT, "public");

const FAVICON_SRC = path.join(SRC_DIR, "favicon-source.png");
const LOGO_SRC = path.join(SRC_DIR, "logo-source.png");

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

/** Trims transparent border pixels back to the real artwork bounds. */
async function trim(buffer) {
  return sharp(buffer).trim({ threshold: 5 }).toBuffer();
}

/**
 * Pads a trimmed image onto a square transparent canvas, centered.
 * This is what guarantees the favicon is never squashed into a
 * square — the artwork keeps its real proportions and just gets
 * breathing room added around the shorter axis.
 */
async function squareCanvas(buffer, canvasSize, paddingRatio = 0.08) {
  const usable = Math.round(canvasSize * (1 - paddingRatio * 2));
  const resized = await sharp(buffer)
    .resize(usable, usable, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  return sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer();
}

async function run() {
  await ensureDir(PUBLIC_DIR);

  console.log("→ Trimming source artwork...");
  const faviconTrimmed = await trim(await sharp(FAVICON_SRC).toBuffer());
  const logoTrimmed = await trim(await sharp(LOGO_SRC).toBuffer());

  // ---------------- FAVICON: square, multiple sizes ----------------
  const faviconSizes = [16, 32, 48, 96, 180, 192, 512];
  console.log("→ Generating favicon sizes:", faviconSizes.join(", "));

  const pngBuffers = {};
  for (const size of faviconSizes) {
    const buf = await squareCanvas(faviconTrimmed, size, size <= 32 ? 0.02 : 0.08);
    pngBuffers[size] = buf;
    await writeFile(path.join(PUBLIC_DIR, `favicon-${size}x${size}.png`), buf);
  }

  // apple-touch-icon needs an OPAQUE background (iOS renders
  // transparency as solid black), so we flatten onto white.
  const appleTouch = await sharp(pngBuffers[180])
    .flatten({ background: { r: 245, g: 250, b: 255 } })
    .png()
    .toBuffer();
  await writeFile(path.join(PUBLIC_DIR, "apple-touch-icon.png"), appleTouch);

  // Legacy favicon.ico bundling 16/32/48 for old browsers/bookmarks
  const icoBuffer = await pngToIco([pngBuffers[16], pngBuffers[32], pngBuffers[48]]);
  await writeFile(path.join(PUBLIC_DIR, "favicon.ico"), icoBuffer);

  // ---------------- LOGO: trimmed, high-res, transparent ----------------
  console.log("→ Exporting navbar/footer logo...");
  const logoMeta = await sharp(logoTrimmed).metadata();
  const targetHeight = 480; // high-res master; CSS displays it much smaller
  const targetWidth = Math.round((logoMeta.width / logoMeta.height) * targetHeight);

  const logoOut = await sharp(logoTrimmed)
    .resize(targetWidth, targetHeight, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(path.join(PUBLIC_DIR, "logo.png"), logoOut);

  // A true-white variant for the dark navy footer band. `.tint()`
  // only shifts hue and keeps the original luminance (still dark).
  // A prior attempt using `.joinChannel()` also failed silently —
  // it produced a fully-opaque rectangle instead of preserving the
  // letter shapes. This version works directly with raw pixel
  // buffers: it reads the resized logo's actual per-pixel alpha
  // values and writes a new image where RGB is always pure white
  // and alpha is copied byte-for-byte from the source. That makes
  // it impossible for the letter shapes to be lost — the output's
  // transparency is mathematically identical to the input's.
  const resizedForFooter = await sharp(logoTrimmed)
    .resize(targetWidth, targetHeight, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: rawPixels, info } = resizedForFooter;
  const whitened = Buffer.alloc(rawPixels.length);
  for (let i = 0; i < rawPixels.length; i += info.channels) {
    whitened[i] = 255;     // R
    whitened[i + 1] = 255; // G
    whitened[i + 2] = 255; // B
    whitened[i + 3] = rawPixels[i + 3]; // A — copied directly from source, untouched
  }

  const footerLogo = await sharp(whitened, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(path.join(PUBLIC_DIR, "logo-light.png"), footerLogo);

  // ---------------- site.webmanifest ----------------
  const manifest = {
    name: "Viverst Global Limited",
    short_name: "Viverst",
    icons: [
      { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#f5faff",
    background_color: "#f5faff",
    display: "standalone",
  };
  await writeFile(
    path.join(PUBLIC_DIR, "site.webmanifest"),
    JSON.stringify(manifest, null, 2)
  );

  console.log("\n✓ All brand assets generated in /public");
  console.log("  Favicons:", faviconSizes.map((s) => `favicon-${s}x${s}.png`).join(", "));
  console.log("  apple-touch-icon.png, favicon.ico, site.webmanifest");
  console.log("  logo.png, logo-light.png");
}

run().catch((err) => {
  console.error("✗ Icon generation failed:", err);
  process.exit(1);
});