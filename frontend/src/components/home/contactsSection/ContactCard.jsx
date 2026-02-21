import { SITE_CONFIG } from "@config/siteConfig";

const { phone, email, address, hours, telHref } = SITE_CONFIG.contacts;

export const ContactCard = ({ className = "" }) => (
  <div
    className={`w-full flex-col justify-center border border-main-dark/10 bg-white p-5 shadow-md md:rounded-2xl ${className} `}
  >
    <h2 className="text-2xl font-extrabold">
      <span className="text-brand-frost">Frost</span>
      <span className="text-main-orange/90">Master</span>
    </h2>
    <h3 className="text-md mb-3 font-semibold text-main-dark">
      Свяжитесь с нами!
    </h3>
    <p className="flex items-center gap-2 text-sm text-main-dark/80">
      <span className="text-main-dark/60">📞</span>
      <a
        href={telHref}
        className="text-main-dark transition-colors hover:text-main-orange hover:underline"
      >
        {phone}
      </a>
    </p>

    <p className="mt-1 flex items-center gap-2 text-sm text-main-dark/80">
      <span className="text-main-dark/60">✉️</span>
      <span className="break-all">{email}</span>
    </p>

    <p className="mt-1 flex items-start gap-2 text-sm text-main-dark/80">
      <span className="mt-0.5 text-main-dark/60">📍</span>
      <span>{address}</span>
    </p>

    <p className="mt-2 flex items-center gap-2 text-sm text-main-dark/80">
      <span className="text-main-dark/60">🕒</span>
      <span>{hours}</span>
    </p>
  </div>
);
