import { useInViewOnce } from "@/hooks/useInViewOnce";
import wrench from "@images/hand_with_wrench.png";

const DEFAULT_HEADING = ["Ремонт холодильников", "в Краснодаре и Адыгее"];

export const HeroBanner = ({ heading = DEFAULT_HEADING }) => {
  const [ref, isVisible] = useInViewOnce();

  return (
    <div className="gradient-blue-strong relative flex h-100 items-center">
      {/* Badge */}
      <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-2.5 rounded-full border border-main-light/20 bg-main-light/10 px-4 py-2">
        <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-blue" />
        </span>
        <span className="text-sm font-medium text-main-light">2 500+ успешных ремонтов</span>
      </div>

      {/* Text */}
      <div className="z-10 flex flex-1 flex-col px-6 sm:items-center lg:items-start">
        <h1 className="text-left sm:text-center lg:text-left">
          <span className="mb-1 block text-4xl font-extrabold text-main-light sm:text-4xl md:text-5xl md:font-bold">
            Ремонт<br className="hidden lg:block" /> холодильников
          </span>
          <span className="mb-1 block text-4xl font-extrabold text-main-light sm:text-4xl md:mt-1 md:text-5xl md:font-bold">
            <span className="whitespace-nowrap">в Краснодаре</span> и Адыгее
          </span>
        </h1>

        <p className="mt-2 text-3xl text-main-light lg:mt-4">
          <span className="bg-main-orange/90 px-1 pb-1">
            Быстро, качественно, недорого.
          </span>
        </p>

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
