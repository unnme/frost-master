import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "@config/services";
import { cn } from "@utils/cn";

export const ServiceList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-8">
      {/* Accordion — mobile only (< sm) */}
      <div className="flex flex-col gap-2 sm:hidden">
        {SERVICES.map(({ icon: Icon, title, description }, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-main-dark/10 bg-main-light"
            >
              <button
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-main-orange/10">
                  <Icon className="h-5 w-5 text-main-orange" />
                </div>
                <span className="flex-1 text-base font-bold text-main-dark">{title}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-main-dark/50 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  isOpen ? "max-h-40" : "max-h-0"
                )}
              >
                <p className="px-4 pb-4 text-sm leading-relaxed text-main-dark/80">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cards — sm and above */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-3xl border border-main-dark/10 bg-main-light p-5 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-main-orange/10">
              <Icon className="h-6 w-6 text-main-orange" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-main-dark">{title}</h3>
            <p className="text-sm leading-relaxed text-main-dark/80">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};
