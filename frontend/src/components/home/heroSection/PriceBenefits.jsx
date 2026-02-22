import { useInViewOnce } from "@hooks/useInViewOnce";
import { PRICE_BENEFITS } from "@config/benefits";

export const PriceBenefits = () => {
  // Single observer for the whole block
  const [containerRef, isVisible] = useInViewOnce();

  return (
    <div
      ref={containerRef}
      className="h-full px-6 md:px-0"
    >
      <div className="relative flex h-full flex-col justify-between gap-10 py-12 lg:gap-0 lg:py-0 lg:pb-6">
        {/* Top and bottom separators for mobile */}
        <span className="absolute inset-x-0 top-0 h-0.5 bg-main-dark/20 lg:hidden" />
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-main-dark/20 lg:hidden" />

        {/* Title */}
        <h2 className="px-10 text-center text-4xl font-extrabold text-main-dark/90 lg:text-left">
          <span className={`inline-block ${isVisible ? "slide-in-left" : ""}`}>
            Почему&nbsp;
          </span>

          <span
            className={`inline-block bg-main-orange/90 px-1 pb-1 text-main-light ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            наши&nbsp;
          </span>

          <span className={`inline-block ${isVisible ? "slide-in-left" : ""}`}>
            цены ниже&nbsp;
          </span>

          <span
            className={`inline-block bg-main-orange/90 px-1 pb-1 text-main-light ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            на&nbsp;
          </span>

          <span className={`inline-block ${isVisible ? "slide-in-left" : ""}`}>
            средних&nbsp;
          </span>

          <span className="whitespace-nowrap">
            <span
              className={`inline-block bg-main-orange/90 px-1 pb-1 text-main-light ${
                isVisible ? "slide-in-right" : ""
              }`}
            >
              10%
            </span>

            <span
              className={`inline-block text-4xl font-semibold transition-opacity duration-2000 ${
                isVisible ? "spin-every-8s opacity-100" : "opacity-0"
              }`}
            >
              ?
            </span>
          </span>
        </h2>

        {/* Benefit Items */}
        {PRICE_BENEFITS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex gap-4 lg:px-4 lg:pr-8"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-main-orange/10">
              <Icon className="h-5 w-5 text-main-orange" />
            </div>
            <div>
              <h3 className="text-md font-semibold">{title}</h3>
              <p className="mt-0.5 text-sm text-main-dark/80">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
