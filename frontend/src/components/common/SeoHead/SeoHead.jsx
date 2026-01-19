import { useEffect } from "react"

const DEFAULT_SITE_URL = "https://frost-master.com";
const DEFAULT_TITLE =
  "Frost-Master — ремонт холодильников в Краснодаре и Адыгее";
const DEFAULT_DESCRIPTION =
  "Frost-Master — профессиональный ремонт холодильников в Краснодаре и Адыгее. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. ☎️: +7 (927) 918-88-18. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant, Beko, Haier и другие.";

/**
 * Normalizes URL to preferred domain (without www)
 * Ensures canonical URLs always use the preferred domain
 */
const normalizeUrl = (url) => {
  if (!url) return DEFAULT_SITE_URL;
  // Remove www from URL if present
  return url.replace(/^https?:\/\/(www\.)?/, "https://");
};

export const SeoHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = "/master.png",
  ogType = "website",
}) => {
  // Always use preferred domain (without www)
  const siteUrl = DEFAULT_SITE_URL;
  const fullCanonical = normalizeUrl(
    canonical ? `${siteUrl}${canonical}` : siteUrl,
  );
  const fullOgImage = ogImage.startsWith("http")
    ? normalizeUrl(ogImage)
    : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", fullCanonical);

    // OpenGraph tags
    // Create optimized OG title (short, informative, no duplication)
    const ogTitle =
      title === DEFAULT_TITLE
        ? "Ремонт холодильников в Краснодаре и Адыгее"
        : title.replace(/^Frost-Master\s*—\s*/, "");

    // Create optimized OG description (content-rich, no duplication)
    const ogDescription =
      description === DEFAULT_DESCRIPTION
        ? "Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. ☎️: +7 (927) 918-88-18. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant, Beko, Haier и другие."
        : description.replace(/^Frost-Master\s*—\s*/, "");

    const ogTags = {
      "og:title": ogTitle,
      "og:description": ogDescription,
      "og:type": ogType,
      "og:url": fullCanonical,
      "og:image": fullOgImage,
      "og:site_name": "Frost-Master",
      "og:locale": "ru_RU",
      "og:image:width": "1200",
      "og:image:height": "630",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Twitter Card tags (use optimized OG values)
    const twitterTags = {
      "twitter:card": "summary_large_image",
      "twitter:title": ogTitle,
      "twitter:description": ogDescription,
      "twitter:image": fullOgImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Yandex specific meta tags
    const yandexTags = {
      "yandex-verification": "", // Add your Yandex verification code
      "geo.region": "RU-KDA",
      "geo.placename": "Краснодар",
      "geo.position": "45.0355;38.9753",
      ICBM: "45.0355, 38.9753",
    };

    Object.entries(yandexTags).forEach(([name, content]) => {
      if (!content) return; // Skip empty values
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Canonical URL always points to preferred domain (without www)
    // This ensures search engines always use https://frost-master.com as the primary URL
    // Even if user visits https://www.frost-master.com, canonical will point to non-www version

    // Additional SEO meta tags
    const additionalTags = {
      keywords:
        "ремонт холодильников, ремонт холодильников Краснодар, ремонт холодильников Адыгея, мастер по ремонту холодильников, ремонт холодильного оборудования, выезд мастера, ремонт на дому, ремонт холодильников на дому Краснодар",
      author: "Frost-Master",
      "format-detection": "telephone=yes",
    };

    Object.entries(additionalTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Meta robots (update if needed)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute(
      "content",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
  }, [title, description, fullCanonical, fullOgImage, ogType]);

  return null;
};
