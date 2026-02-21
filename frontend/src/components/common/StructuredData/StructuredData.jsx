import { useEffect } from "react";
import { SITE_CONFIG } from "@config/siteConfig";
import { FAQ_ITEMS } from "@config/faqItems";

const { siteUrl, brandName, contacts, geo, sameAs, serviceAreas } =
  SITE_CONFIG;

/**
 * Structured data component for SEO (JSON-LD)
 * Optimized for Yandex and Google search engines
 */
export const StructuredData = () => {
  useEffect(() => {
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#localbusiness`,
      name: brandName,
      alternateName: "Frost Master",
      description:
        "Ремонт холодильников и холодильного оборудования в Краснодаре и Адыгее. Профессиональный мастер с 10-летним опытом. Выезд на дом, гарантия на работы.",
      url: siteUrl,
      telephone: contacts.phone,
      email: contacts.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: contacts.streetAddress,
        addressLocality: contacts.city,
        addressRegion: contacts.region,
        postalCode: contacts.postalCode,
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      openingHours: contacts.hoursSchema,
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
      areaServed: serviceAreas.map(({ name, type }) => ({
        "@type": type,
        name,
      })),
      serviceType: [
        "Ремонт холодильников",
        "Ремонт холодильного оборудования",
        "Диагностика холодильников",
        "Замена запчастей",
      ],
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/master.png`,
        width: 1200,
        height: 630,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      paymentAccepted: "Cash, Card",
      currenciesAccepted: "RUB",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги по ремонту холодильников",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Диагностика холодильника",
              description:
                "Профессиональная диагностика неисправностей холодильника",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ремонт холодильников",
              description:
                "Ремонт всех типов холодильников и холодильного оборудования",
            },
          },
        ],
      },
    };

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: brandName,
      alternateName: "Frost Master",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contacts.phone,
        contactType: "customer service",
        areaServed: ["RU"],
        availableLanguage: ["Russian"],
      },
      sameAs,
    };

    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: siteUrl,
        },
      ],
    };

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
