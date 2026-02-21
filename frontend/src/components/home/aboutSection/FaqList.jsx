import { ChevronDown } from "lucide-react";
import { cn } from "@utils/cn";
import { FAQ_ITEMS } from "@config/faqItems";

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="rounded-2xl border border-main-dark/10 bg-main-light shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-base font-medium text-main-dark">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-main-dark/70 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden px-5 pb-4 text-sm text-main-dark/80">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export const FaqList = ({ openIndex, toggle }) => {
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};
