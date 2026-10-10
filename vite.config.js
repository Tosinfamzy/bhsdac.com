import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { PAGES, NOT_FOUND, SITE, CHURCH_SCHEMA, fullTitle } from "./src/data/pageMeta.js";

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const seoBlock = ({ title, description, url, noindex = false, schema = null }) => {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${SITE.image}" />`,
  ];
  if (schema) {
    // Escape "<" so the JSON can never close the script tag early.
    const json = JSON.stringify(schema).replace(/</g, "\\u003c");
    lines.push(`<script type="application/ld+json">${json}</script>`);
  }
  return lines.map((l) => `    ${l}`).join("\n");
};

// After the client build, write one HTML file per route with its own head tags,
// a noindex 404.html, and a sitemap generated from the same route list.
// Vercel's cleanUrls serves /about from about.html.
const prerenderMeta = () => {
  let outDir;
  return {
    name: "prerender-meta",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const shell = readFileSync(resolve(outDir, "index.html"), "utf8");
      const marker = /[ \t]*<!-- seo:start[\s\S]*?<!-- seo:end -->/;
      if (!marker.test(shell)) throw new Error("prerender-meta: seo markers missing from index.html");

      const render = (opts) => shell.replace(marker, seoBlock(opts));

      for (const [path, meta] of Object.entries(PAGES)) {
        const url = `${SITE.url}${path}`;
        const html = render({
          title: fullTitle(path, meta),
          description: meta.description,
          url,
          schema: path === "/" ? CHURCH_SCHEMA : null,
        });
        const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
        writeFileSync(resolve(outDir, file), html);
      }

      writeFileSync(
        resolve(outDir, "404.html"),
        render({
          title: `${NOT_FOUND.title} | ${SITE.name}`,
          description: NOT_FOUND.description,
          url: SITE.url,
          noindex: true,
        })
      );

      const urls = Object.keys(PAGES)
        .map((path) => `  <url><loc>${SITE.url}${path}</loc></url>`)
        .join("\n");
      writeFileSync(
        resolve(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), prerenderMeta()],
});
