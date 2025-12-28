import { useEffect } from "react";

const SITE_URL = "https://frost-master.com";
const PHONE = "+7 (927) 918-88-18";
const EMAIL = "whereisxur@icloud.com";
const ADDRESS = "г. Краснодар, Бжегокайская 31/3 к3";
const WORKING_HOURS = "Mo-Su 08:00-22:00";

/**
 * Structured data component for SEO (JSON-LD)
 * Optimized for Yandex and Google search engines
 */
export const StructuredData = () => {
	useEffect(() => {
		// LocalBusiness schema for Yandex and Google
		const localBusiness = {
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"@id": `${SITE_URL}#organization`,
			name: "FrostMaster",
			alternateName: "Frost Master",
			description:
				"Ремонт холодильников и холодильного оборудования в Краснодаре и Адыгее. Профессиональный мастер с 10-летним опытом. Выезд на дом, гарантия на работы.",
			url: SITE_URL,
			telephone: PHONE,
			email: EMAIL,
			address: {
				"@type": "PostalAddress",
				streetAddress: "Бжегокайская 31/3 к3",
				addressLocality: "Краснодар",
				addressRegion: "Краснодарский край",
				addressCountry: "RU",
			},
			geo: {
				"@type": "GeoCoordinates",
				// Approximate coordinates for Krasnodar, Bzhegokayskaya street
				latitude: "45.0355",
				longitude: "38.9753",
			},
			openingHoursSpecification: [
				{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					],
					opens: "08:00",
					closes: "22:00",
				},
			],
			priceRange: "$$",
			areaServed: [
				{
					"@type": "City",
					name: "Краснодар",
				},
				{
					"@type": "AdministrativeArea",
					name: "Республика Адыгея",
				},
			],
			serviceType: [
				"Ремонт холодильников",
				"Ремонт холодильного оборудования",
				"Диагностика холодильников",
				"Замена запчастей",
			],
			image: `${SITE_URL}/master.png`,
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "5",
				reviewCount: "50",
			},
		};

		// Organization schema
		const organization = {
			"@context": "https://schema.org",
			"@type": "Organization",
			"@id": `${SITE_URL}#organization`,
			name: "FrostMaster",
			alternateName: "Frost Master",
			url: SITE_URL,
			logo: `${SITE_URL}/logo.svg`,
			contactPoint: {
				"@type": "ContactPoint",
				telephone: PHONE,
				contactType: "customer service",
				areaServed: ["RU"],
				availableLanguage: ["Russian"],
			},
			sameAs: [
				// Add social media links if available
			],
		};

		// FAQPage schema
		const faqPage = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: [
				{
					"@type": "Question",
					name: "Сколько стоит выезд?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Выезд мастера по Краснодару — бесплатно при согласии на ремонт. Если вы откажетесь от работ, оплачивается только диагностика.",
					},
				},
				{
					"@type": "Question",
					name: "Сколько занимает ремонт?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Ремонт обычно занимает от 30 минут до 2 часов. Зависит от сложности поломки и деталей. Точный срок назовёт мастер после диагностики.",
					},
				},
				{
					"@type": "Question",
					name: "Что если мастер не починит?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Если починка невозможна или экономически нецелесообразна, вы оплачиваете только диагностику. Никаких скрытых платежей.",
					},
				},
				{
					"@type": "Question",
					name: "Есть ли гарантия?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Да, на все виды работ и запчасти предоставляем гарантию от 3 до 12 месяцев.",
					},
				},
				{
					"@type": "Question",
					name: "Какие бренды ремонтируете?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Ремонтируем большинство брендов: Samsung, LG, Bosch, Indesit, Atlant, Ariston, Beko, Haier и другие.",
					},
				},
				{
					"@type": "Question",
					name: "Работаете в выходные?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Да, выезжаем ежедневно — включая выходные и праздники.",
					},
				},
			],
		};

		// BreadcrumbList schema
		const breadcrumb = {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Главная",
					item: SITE_URL,
				},
			],
		};

		// Add all structured data to page
		const scripts = [
			{ id: "local-business", data: localBusiness },
			{ id: "organization", data: organization },
			{ id: "faq-page", data: faqPage },
			{ id: "breadcrumb", data: breadcrumb },
		];

		scripts.forEach(({ id, data }) => {
			let script = document.getElementById(`structured-data-${id}`);
			if (!script) {
				script = document.createElement("script");
				script.id = `structured-data-${id}`;
				script.type = "application/ld+json";
				document.head.appendChild(script);
			}
			script.textContent = JSON.stringify(data);
		});

		return () => {
			scripts.forEach(({ id }) => {
				const script = document.getElementById(`structured-data-${id}`);
				if (script) {
					script.remove();
				}
			});
		};
	}, []);

	return null;
};

