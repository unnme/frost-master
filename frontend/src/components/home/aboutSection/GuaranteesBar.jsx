import { useInViewOnce } from "@hooks/useInViewOnce";
import { cn } from "@utils/cn";
import { GUARANTEES } from "@config/guarantees";

export const GuaranteesBar = () => {
  const [ref, visible] = useInViewOnce(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "relative px-6 py-12 transition-all duration-1000 ease-out md:px-8 md:py-14",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
    >
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-main-dark/15">
        {GUARANTEES.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={cn("flex flex-col items-center gap-1.5 lg:items-start", i !== 0 && "lg:pl-6")}
            >
              <div className="flex items-center gap-2">
                <Icon className={cn("h-5 w-5 shrink-0", item.iconCls)} />
                <span className="text-xl font-extrabold leading-tight text-main-dark">
                  {item.value}
                </span>
              </div>
              <p className="max-w-[13rem] text-center text-sm leading-snug text-main-dark/50 lg:max-w-none lg:text-left">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
