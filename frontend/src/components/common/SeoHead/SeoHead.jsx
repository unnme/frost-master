import { useEffect } from "react";

const DEFAULT_SITE_URL = "https://frost-master.com";
const DEFAULT_TITLE =
	"FrostMaster — ремонт холодильников в Краснодаре и Адыгее";
const DEFAULT_DESCRIPTION =
	"FrostMaster - ремонт рядом с Вами! Ремонтируем холодильники и холодильное оборудование в Краснодаре и Адыгее. Качественный ремонт, честные цены и гарантия. Работаем ежедневно с 8:00 до 22:00";

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
		const ogTags = {
			"og:title": title,
			"og:description": description,
			"og:type": ogType,
			"og:url": fullCanonical,
			"og:image": fullOgImage,
			"og:site_name": "FrostMaster",
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

		// Twitter Card tags
		const twitterTags = {
			"twitter:card": "summary_large_image",
			"twitter:title": title,
			"twitter:description": description,
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
			"ICBM": "45.0355, 38.9753",
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
				"ремонт холодильников, ремонт холодильников Краснодар, ремонт холодильников Адыгея, мастер по ремонту холодильников, ремонт холодильного оборудования, выезд мастера, ремонт на дому",
			author: "FrostMaster",
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
	}, [title, description, fullCanonical, fullOgImage, ogType]);

	return null;
};
