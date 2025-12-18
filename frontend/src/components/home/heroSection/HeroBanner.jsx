import { useInViewOnce } from "@/hooks/useInViewOnce";
import wrench from "@images/hand_with_wrench.png";

export const HeroBanner = () => {
  const [ref, isVisible] = useInViewOnce();

  return (
    <div className="gradient-blue-strong relative flex h-100 items-center">
      {/* Text */}
      <div className="z-10 flex flex-1 flex-col text-center sm:items-start sm:px-8 sm:text-left">
        <h1 className="mb-1 text-3xl font-bold text-main-light sm:text-4xl lg:text-5xl">
          ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ ВАШЕГО ХОЛОДИЛЬНИКА
        </h1>
        <p className="mb-2 text-3xl font-bold text-main-orange sm:text-4xl">
          <span className="inline-block bg-main-light/80 px-0.5">
            в Краснодаре
          </span>
        </p>
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
          alt="Ремонт холодильников"
          className={`mt-40 w-115 opacity-90 ${isVisible ? "rotate-pop-in" : ""}`}
        />
      </div>

      {/* Static background image for mobile */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-25 lg:hidden">
        <img
          src={wrench}
          alt="Ремонт холодильников"
          className="min-w-115 scale-130 opacity-30"
        />
      </div>
    </div>
  );
};
