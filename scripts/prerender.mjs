import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "dist");
const sitemap = await readFile(path.join(root, "public/sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>https:\/\/axioware\.tech([^<]*)<\/loc>/g)]
  .map((match) => match[1] || "/");

const vite = await createServer({
  configFile: path.join(root, "vite.config.ts"),
  mode: "production",
  appType: "custom",
  logLevel: "error",
  ssr: { noExternal: ["react-helmet-async"] },
  server: { middlewareMode: true },
});

try {
  const { getPrerenderRoutes, renderRoute } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const routes = getPrerenderRoutes(sitemapUrls);
  const template = await readFile(path.join(outputDir, "index.html"), "utf8");
  const metaStart = "<!-- AXIO_PAGE_HEAD_START -->";
  const metaEnd = "<!-- AXIO_PAGE_HEAD_END -->";
  const headStart = template.indexOf(metaStart);
  const headEnd = template.indexOf(metaEnd);

  if (headStart === -1 || headEnd === -1 || headEnd < headStart) {
    throw new Error("Could not find the page metadata markers in dist/index.html");
  }

  const beforeMeta = template.slice(0, headStart);
  const afterMeta = template.slice(headEnd + metaEnd.length);
  const rootPattern = /<div id="root"><\/div>/;
  let renderedCount = 0;

  async function writePage(route, destination) {
    const { html, helmet } = renderRoute(route);
    if (!helmet) throw new Error(`No metadata was rendered for ${route}`);

    const pageHead = [
      helmet.title?.toString(),
      helmet.base?.toString(),
      helmet.meta?.toString(),
      helmet.link?.toString(),
      helmet.style?.toString(),
      helmet.script?.toString(),
      helmet.noscript?.toString(),
    ].filter(Boolean).join("\n    ");
    const rootMarkup = `<div id="root" data-prerendered="true">${html}</div>`;
    const page = `${beforeMeta}${pageHead}${afterMeta}`.replace(rootPattern, rootMarkup);

    if (page === `${beforeMeta}${pageHead}${afterMeta}`) {
      throw new Error(`Could not find the root element while rendering ${route}`);
    }

    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, page);
    renderedCount += 1;
  }

  for (const route of routes) {
    const safePath = decodeURIComponent(route).replace(/^\/+|\/+$/g, "");
    const destination = safePath
      ? path.join(outputDir, safePath, "index.html")
      : path.join(outputDir, "index.html");
    await writePage(route, destination);
  }

  await writePage("/__not_found__", path.join(outputDir, "404.html"));
  console.log(`Prerendered ${renderedCount} pages, including the 404 document.`);
} finally {
  await vite.close();
}
