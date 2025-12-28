import { useInViewOnce } from "@/hooks/useInViewOnce";
import wrench from "@images/hand_with_wrench.png";

export const HeroBanner = () => {
  const [ref, isVisible] = useInViewOnce();

  return (
    <div className="gradient-blue-strong relative flex h-100 items-center">
      {/* Text */}
      <div className="z-10 flex flex-1 flex-col px-6 sm:items-center lg:items-start">
        <h1 className="text-left sm:text-center lg:text-left">
          <span className="mb-1 block text-3xl font-extrabold text-main-light sm:text-4xl lg:text-5xl lg:font-bold">
            ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ
          </span>
          <span className="mb-1 block text-3xl font-extrabold text-main-light sm:text-4xl md:mt-1 lg:text-5xl lg:font-bold">
            ВАШЕГО ХОЛОДИЛЬНИКА
          </span>
        </h1>

        <p className="text-3xl text-main-light">
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
