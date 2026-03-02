import { SITE_CONFIG } from "./siteConfig";

const { phone } = SITE_CONFIG.contacts;

export const GEO_PAGES = {
  krasnodar: {
    title: "Ремонт холодильников в Краснодаре — Frost-Master",
    description: `Наш тел.: ${phone}. Ремонт холодильников в Краснодаре на дому. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant, Beko, Haier и другие.`,
    heading: ["Ремонт холодильников", "в Краснодаре"],
    canonical: "/remont-holodilnikov-krasnodar",
  },
  adygea: {
    title: "Ремонт холодильников в Адыгее — Frost-Master",
    description: `Наш тел.: ${phone}. Ремонт холодильников в Новой Адыгее: Яблоновский, Энем, Тахтамукай. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев.`,
    heading: ["Ремонт холодильников", "в Адыгее"],
    canonical: "/remont-holodilnikov-adygeya",
  },
};
