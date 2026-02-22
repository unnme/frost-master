import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@config/siteConfig";

const { phone, email, address, hours, telHref } = SITE_CONFIG.contacts;

export const ContactCard = ({ className = "" }) => (
  <div
    className={`w-full flex-col justify-center border border-main-dark/10 bg-white p-5 shadow-md md:rounded-2xl ${className}`}
  >
    <h2 className="text-2xl font-extrabold">
      <span className="text-brand-frost">Frost</span>
      <span className="text-main-orange/90">Master</span>
    </h2>
    <h3 className="text-md mb-3 font-semibold text-main-dark">
      Свяжитесь с нами!
    </h3>

    <p className="flex items-center gap-2 text-sm text-main-dark/80">
      <Phone className="h-4 w-4 shrink-0 text-main-dark/60" />
      <a
        href={telHref}
        className="text-main-dark transition-colors hover:text-main-orange hover:underline"
      >
        {phone}
      </a>
    </p>

    <p className="mt-1 flex items-center gap-2 text-sm text-main-dark/80">
      <Mail className="h-4 w-4 shrink-0 text-main-dark/60" />
      <span className="break-all">{email}</span>
    </p>

    <p className="mt-1 flex items-start gap-2 text-sm text-main-dark/80">
      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-main-dark/60" />
      <span>{address}</span>
    </p>

    <p className="mt-2 flex items-center gap-2 text-sm text-main-dark/80">
      <Clock className="h-4 w-4 shrink-0 text-main-dark/60" />
      <span>{hours}</span>
    </p>
  </div>
);
