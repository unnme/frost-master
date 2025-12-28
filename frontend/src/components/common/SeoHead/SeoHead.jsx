import { useEffect } from "react";

const DEFAULT_SITE_URL = "https://frost-master.com";
const DEFAULT_TITLE =
  "FrostMaster — ремонт холодильников в Краснодаре и Адыгее";
const DEFAULT_DESCRIPTION =
  "FrostMaster - ремонт рядом с Вами! Ремонтируем холодильники и холодильное оборудование в Краснодаре и Адыгее. Качественный ремонт, честные цены и гарантия. Работаем ежедневно с 8:00 до 22:00.";

export const SeoHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = "/master.png",
  ogType = "website",
}) => {
  const siteUrl = DEFAULT_SITE_URL;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
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
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:type": ogType,
      "og:url": fullCanonical,
      "og:image": fullOgImage,
      "og:site_name": "FrostMaster",
      "og:locale": "ru_RU",
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
  }, [title, description, fullCanonical, fullOgImage, ogType]);

  return null;
};
