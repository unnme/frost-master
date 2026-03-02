export const SITE_CONFIG = {
  siteUrl: "https://frost-master.com",
  brandName: "Frost-Master",

  contacts: {
    phone: "+7 (993) 443-39-56",
    telHref: "tel:+79934433956",
    email: "frost-master@icloud.com",
    address: "г. Краснодар, Бжегокайская 31/3 к3",
    streetAddress: "Бжегокайская 31/3 к3",
    city: "Краснодар",
    region: "Краснодарский край",
    postalCode: "385132",
    hours: "Ежедневно, 8:00 – 22:00",
    hoursSchema: "Mo-Su 08:00-22:00",
    businessHours: { start: 8, end: 22, timezone: "Europe/Moscow" },
    telegramUrl: "https://t.me/frost_master_krd",
    maxUrl: "https://vk.me/frost_master_krd",
  },

  geo: {
    latitude: "45.015511",
    longitude: "38.917425",
    // Format for geo meta tags: "lat;lon"
    position: "45.015511;38.917425",
    // Format for ICBM meta tag: "lat, lon"
    icbm: "45.015511, 38.917425",
  },

  // TODO: add Yandex Maps link after organization is registered
  // TODO: add Google Maps link after Google Business Profile is verified
  sameAs: [
    "https://t.me/frost_master_krd",
  ],

  serviceAreas: [
    // Краснодарский край
    { name: "Краснодар", type: "City" },
    { name: "Елизаветинская", type: "Place" },
    { name: "Колосистый", type: "Place" },
    { name: "Северный", type: "Place" },
    { name: "Южный", type: "Place" },
    { name: "Плодородный", type: "Place" },
    // Республика Адыгея (Тахтамукайский район)
    { name: "Новая Адыгея", type: "Place" },
    { name: "Яблоновский", type: "Place" },
    { name: "Энем", type: "Place" },
    { name: "Тахтамукай", type: "Place" },
    { name: "Козет", type: "Place" },
    { name: "Афипсип", type: "Place" },
    { name: "Прикубанский", type: "Place" },
    { name: "Дружный", type: "Place" },
    { name: "Новобжегокай", type: "Place" },
    { name: "Супс", type: "Place" },
    { name: "Новый Сад", type: "Place" },
    { name: "Тлюстенхабль", type: "Place" },
  ],
};
