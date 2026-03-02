import { SITE_CONFIG } from "./siteConfig";

const { phone } = SITE_CONFIG.contacts;

export const GEO_PAGES = {
  krasnodar: {
    title: "Frost-Master — ремонт холодильников в Краснодаре",
    description: `Ремонт холодильников в Краснодаре. Наш тел.: ${phone}. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев. Ремонт всех брендов: Samsung, LG, Bosch, Indesit, Atlant, Beko, Haier и другие.`,
    heading: ["Ремонт холодильников", "в Краснодаре"],
    canonical: "/remont-holodilnikov-krasnodar",
  },
  adygea: {
    title: "Frost-Master — ремонт холодильников в Адыгее",
    description: `Ремонт холодильников в Яблоновском, Энеме, Тахтамукае. Наш тел.: ${phone}. Выезд мастера и диагностика БЕСПЛАТНО при согласии на ремонт. Ежедневно с 8:00 до 22:00. Гарантия 3-12 месяцев.`,
    heading: ["Ремонт холодильников", "в Адыгее"],
    canonical: "/remont-holodilnikov-adygeya",
  },
};
