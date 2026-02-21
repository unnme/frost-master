import { BadgeRussianRuble } from "lucide-react";
import { PRICES } from "@config/prices";
export const PriceList = () => (
  <div className="h-full rounded-none border border-main-dark/10 bg-main-light p-6 shadow-md sm:rounded-3xl lg:rounded-r-none lg:border-r-0">
    <h3 className="mb-4 flex items-center justify-center gap-2 text-center text-xl font-bold text-main-dark">
      <BadgeRussianRuble className="h-6 w-6 shrink-0 text-main-orange" />
      Наши цены
    </h3>

    <div className="divide-y divide-main-dark/20">
      {PRICES.map((item, i) => (
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
