import { SITE_CONFIG } from "@config/siteConfig";

export const YandexMap = () => {
  const { address } = SITE_CONFIG.contacts;
  const { latitude: lat, longitude: lon } = SITE_CONFIG.geo;
  const src = `https://yandex.ru/map-widget/v1/?ll=${lon},${lat}&z=17&pt=${lon},${lat},pm2rdm`;

  return (
    <div className="overflow-hidden rounded-2xl border border-main-dark/10 h-full">
      <iframe
        title={`Карта — ${address}`}
        src={src}
        className="h-full min-h-[300px] w-full"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};
