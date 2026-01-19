import { ContactCard } from "./ContactCard"

export const GMap = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-main-dark/10">
        <iframe
          title="Карта — Краснодар, Бжегокайская 31/3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.5602091870833!2d38.91569687140184!3d45.015807029397365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04ef38204d6e9%3A0x10c6a2de7f111f3e!2z0JHQttC10LPQvtC60LDQudGB0LrQsNGPLCAzMSDQutC-0YDQv9GD0YEgMywg0J3QvtCy0LDRjyDQkNC00YvQs9C10Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCQ0LTRi9Cz0LXRjywgMzg1MTQw!5e0!3m2!1sru!2sru!4v1765256936936!5m2!1sru!2sru"
          className="h-[450px] w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="static top-2 right-2 z-10 md:absolute">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};
