/**
 * Static prerender script
 * Runs after `vite build` (client) and `vite build --ssr` (server).
 * Generates pre-rendered HTML for all routes to improve Yandex/Google indexing.
 * Client-side React takes over after JS loads (createRoot replaces prerendered content).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => resolve(__dirname, p);

// Import siteConfig using relative path with explicit .js extension (required in Node.js ESM)
// geoPages.js is not imported here — it uses extensionless imports that don't work in bare Node
const { SITE_CONFIG } = await import("./src/config/siteConfig.js");

const { siteUrl } = SITE_CONFIG;
const { phone } = SITE_CONFIG.contacts;

// Route meta is defined here instead of importing from geoPages.js / SeoHead props
// to avoid Vite alias resolution (which only works at build time, not in plain Node.js)
const routes = [
  {
    path: "/",
    file: "index.html",
    title: "Ремонт холодильников в Краснодаре и Адыгее — Frost-Master",
    description: `Наш тел.: ${phone}. Ремонт холодильников в Краснодаре и Адыгее — Frost-Master. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant, Beko, Haier и другие.`,
    canonical: `${siteUrl}/`,
  },
  {
    path: "/remont-holodilnikov-krasnodar",
    file: "remont-holodilnikov-krasnodar/index.html",
    title: "Ремонт холодильников в Краснодаре — Frost-Master",
    description: `Наш тел.: ${phone}. Ремонт холодильников в Краснодаре на дому. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant, Beko, Haier и другие.`,
    canonical: `${siteUrl}/remont-holodilnikov-krasnodar`,
  },
  {
    path: "/remont-holodilnikov-adygeya",
    file: "remont-holodilnikov-adygeya/index.html",
    title: "Ремонт холодильников в Адыгее — Frost-Master",
    description: `Наш тел.: ${phone}. Ремонт холодильников в Новой Адыгее: Яблоновский, Энем, Тахтамукай. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев.`,
    canonical: `${siteUrl}/remont-holodilnikov-adygeya`,
  },
  {
    path: "/privacy",
    file: "privacy/index.html",
    title: "Политика конфиденциальности | Frost-Master",
    description: `Политика конфиденциальности и обработки персональных данных Frost-Master — ремонт холодильников в Краснодаре и Адыгее. Наш тел.: ${phone}.`,
    canonical: `${siteUrl}/privacy`,
  },
];

// Read the client-built HTML template
const template = readFileSync(toAbsolute("dist/index.html"), "utf-8");

// Import the SSR bundle
const { render } = await import(toAbsolute(".ssr/entry-server.js"));

for (const route of routes) {
  const appHtml = render(route.path);

  const html = template
    .replace("<!--ssr-outlet-->", appHtml)
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${route.description.replace(/"/g, "&quot;")}$2`,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${route.canonical}$2`,
    );

  const outputPath = toAbsolute(`dist/${route.file}`);
  const outputDir = dirname(outputPath);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, html);
  console.log(`  ✓ dist/${route.file}`);
}

console.log("Prerender complete.");
