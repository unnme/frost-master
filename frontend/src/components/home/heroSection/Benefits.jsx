import { useInViewOnce } from "@hooks/useInViewOnce";

const priceBenefits = [
  {
    title: "Справедливая оценка работы",
    text: "Мы не завышаем стоимость — ремонтируем за честную и доступную цену",
  },
  {
    title: "Ориентация на рекомендации",
    text: "Клиенты приходят по совету — благодаря низким ценам и качеству",
  },
  {
    title: "Запчасти по оптовым ценам",
    text: "Закупаем комплектующие напрямую у поставщиков",
  },
  {
    title: "Диагностика в подарок",
    text: "При ремонте техники диагностика бесплатно",
  },
];

export const Benefits = () => {
  // Single observer for the whole block
  const [containerRef, isVisible] = useInViewOnce();

  return (
    <div
      ref={containerRef}
      className="h-full px-8 md:px-0 lg:px-0"
    >
      <div className="relative flex h-full flex-col justify-between gap-10 py-12 lg:gap-0 lg:py-0 lg:pb-6">
        {/* Top and bottom separators for mobile */}
        <span className="absolute inset-x-0 top-0 h-0.5 bg-main-dark/20 lg:hidden" />
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-main-dark/20 lg:hidden" />

        {/* Title */}
        <h2 className="px-10 text-center text-4xl font-bold text-main-dark/90 lg:text-left">
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
        {priceBenefits.map(({ title, text }) => (
          <div
            key={title}
            className="flex flex-col px-4 pr-8"
          >
            <div className="flex items-center gap-4">
              <span className="block h-2 w-2 shrink-0 rounded-full bg-main-orange" />
              <h3 className="text-md font-semibold">{title}</h3>
            </div>
            <p className="ml-6 text-sm text-main-dark/80">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
