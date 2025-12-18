const prices = [
  { service: "Диагностика холодильника", price: "от 1500 ₽" },
  { service: "Заправка фреоном", price: "от 1200 ₽" },
  { service: "Замена терморегулятора", price: "от 1400 ₽" },
  { service: "Замена датчика температуры", price: "от 1300 ₽" },
  { service: "Ремонт модуля управления", price: "от 2500 ₽" },
  { service: "Чистка дренажной системы", price: "от 800 ₽" },
  { service: "Замена пускового реле", price: "от 1600 ₽" },
  { service: "Замена компрессора", price: "от 5500 ₽" },
];

// ------------------------
//        PRICE LIST
// ------------------------
export const PriceList = () => (
  <div className="h-full rounded-none border border-main-dark/10 bg-main-light p-6 shadow-md sm:rounded-3xl lg:rounded-r-none lg:border-r-0">
    <h3 className="mb-4 text-center text-xl font-bold text-main-dark">
      Наши цены
    </h3>

    <div className="divide-y divide-main-dark/20">
      {prices.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-3"
        >
          <span className="text-sm text-main-dark/80">{item.service}</span>
          <span className="font-semibold text-main-dark">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);
