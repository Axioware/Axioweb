import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders } from "./App";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { blogPosts } from "./data/blogArticles";
import { featuredCaseStudies } from "./data/caseStudies";
import { servicePages } from "./pages/services/ServicePageTemplate";
import { serviceData } from "./pages/services/GenericService";

export function getPrerenderRoutes(sitemapUrls: string[] = []) {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/services",
    "/services/voice-agents",
    "/services/chatbots",
    "/dental-agent",
    "/privacy",
    "/terms",
    "/careers",
  ];

  const serviceRoutes = [
    ...Object.keys(servicePages).map((slug) => `/services/${slug}`),
    ...Object.keys(serviceData).map((slug) => `/services/${slug}`),
  ];
  const blogRoutes = blogPosts.map((post) => `/blog/${post.id}`);
  const caseStudyRoutes = featuredCaseStudies.map((study) => `/case-studies/${study.slug}`);

  return [...new Set([
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...sitemapUrls,
  ])];
}

export function renderRoute(url: string) {
  const helmetContext: { helmet?: unknown } = {};
  const html = renderToString(
    <AppProviders helmetContext={helmetContext} prerendered>
      <StaticRouter location={url}>
        <AnimatedRoutes />
      </StaticRouter>
    </AppProviders>,
  );

  return { html, helmet: helmetContext.helmet as any };
}
