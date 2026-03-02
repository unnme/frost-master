import { ChevronDown } from "lucide-react";
import { cn } from "@utils/cn";
import { FAQ_ITEMS } from "@config/faqItems";

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={cn(
      "rounded-2xl border shadow-md transition-all duration-300",
      isOpen ? "gradient-blue-strong border-main-light/20" : "border-main-dark/10 bg-main-light",
    )}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className={cn("text-base font-medium transition-colors duration-300", isOpen ? "text-main-light" : "text-main-dark")}>
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-all duration-300",
            isOpen ? "rotate-180 text-main-light" : "text-main-dark/70",
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className={cn("overflow-hidden px-5 pb-4 text-sm transition-colors duration-300", isOpen ? "text-main-light/80" : "text-main-dark/80")}>
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
