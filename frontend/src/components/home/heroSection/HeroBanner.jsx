import { Phone } from "lucide-react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { SITE_CONFIG } from "@config/siteConfig";
import wrench from "@images/hand_with_wrench.png";

const DEFAULT_HEADING = ["Ремонт холодильников в Краснодаре", "и Адыгее"];

export const HeroBanner = ({ heading = DEFAULT_HEADING }) => {
  const [ref, isVisible] = useInViewOnce();
  const { phone, telHref } = SITE_CONFIG.contacts;

  return (
    <div className="gradient-blue-strong relative flex h-100 items-center">
      {/* Text */}
      <div className="z-10 flex flex-1 flex-col px-6 sm:items-center lg:items-start">
        <h1 className="text-left sm:text-center lg:text-left">
          <span className="mb-1 block text-3xl font-extrabold text-main-light sm:text-4xl lg:text-5xl lg:font-bold">
            {heading[0]}
          </span>
          <span className="mb-1 block text-3xl font-extrabold text-main-light sm:text-4xl md:mt-1 lg:text-5xl lg:font-bold">
            {heading[1]}
          </span>
        </h1>

        <p className="mt-2 text-3xl text-main-light lg:mt-4">
          <span className="bg-main-orange/90 px-1 pb-1">
            Быстро, качественно, недорого.
          </span>
        </p>

        <a
          href={telHref}
          className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-main-orange px-6 py-3 text-lg font-bold text-main-light transition-opacity duration-200 hover:opacity-90 sm:self-center lg:self-start"
          aria-label={`Позвонить по номеру ${phone}`}
        >
          <Phone className="h-5 w-5 shrink-0" />
          {phone}
        </a>
      </div>

      {/* Animated image */}
      <div
        ref={ref}
        className="hidden flex-1 justify-center lg:flex"
      >
        <img
          src={wrench}
          alt="Мастер по ремонту холодильников с инструментом"
          width="460"
          height="460"
          className={`mt-40 w-115 opacity-90 ${isVisible ? "rotate-pop-in" : ""}`}
        />
      </div>

      {/* Static background image for mobile */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-34 sm:-translate-y-25 lg:hidden">
        <img
          src={wrench}
          alt=""
          className="min-w-115 scale-125 opacity-10 sm:scale-130"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
