/**
 * Generates dist/sitemap.xml from the actual prerendered output.
 *
 * Runs automatically as the npm `postbuild` step (after `vite-react-ssg build`).
 * Because it walks the real dist/ HTML files, the sitemap can never drift out of
 * sync with the site — new routes are picked up automatically with no manual edit.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Keep in sync with SITE_URL in src/config/site.ts
const SITE_URL = "https://maxmarinegroup.com";
const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const TODAY = new Date().toISOString().slice(0, 10);

// Pages that should not appear in the sitemap:
//  - 404 / not-found
//  - /careers (canonicalises to /contact, so it must not be listed separately)
const EXCLUDE = /^\/(404|not-found|careers)$/i;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : Promise.resolve([full]);
    }),
  );
  return nested.flat();
}

function toUrlPath(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, "/");
  const trimmed = rel.replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
  return "/" + trimmed;
}

function metaFor(urlPath) {
  if (urlPath === "/") return { priority: "1.0", changefreq: "weekly" };
  if (/^\/(privacy|terms|cookies)$/.test(urlPath)) return { priority: "0.3", changefreq: "yearly" };
  // depth 1 = section landing pages, deeper = detail pages
  const depth = urlPath.split("/").filter(Boolean).length;
  return depth === 1 ? { priority: "0.8", changefreq: "monthly" } : { priority: "0.7", changefreq: "monthly" };
}

const htmlFiles = (await walk(DIST)).filter((f) => f.endsWith(".html"));
const urls = [...new Set(htmlFiles.map(toUrlPath))]
  .filter((u) => !EXCLUDE.test(u))
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const body = urls
  .map((u) => {
    const { priority, changefreq } = metaFor(u);
    const loc = `${SITE_URL}${u === "/" ? "/" : u}`;
    return `  <url><loc>${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
await fs.writeFile(path.join(DIST, "sitemap.xml"), xml, "utf8");
console.log(`[sitemap] wrote ${urls.length} URLs to dist/sitemap.xml`);
