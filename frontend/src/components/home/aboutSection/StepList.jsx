import { cn } from "@utils/cn";
import { useInViewOnce } from "@hooks/useInViewOnce";
import { STEPS } from "@config/steps";

export const StepUnit = ({ step, index, visible }) => {
  const Icon = step.icon;

  const cardCls = cn(
    "group relative flex min-h-20 min-w-4/5 flex-col justify-center",
    "rounded-4xl rounded-tr-none border-2 border-main-dark/30 bg-main-light shadow-sm",
    "duration-500 ease-out sm:min-w-5/7 md:min-w-70",
    visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
  );

  return (
    <div
      className={cardCls}
      style={{ transitionDelay: `${index * 0.25}s` }}
    >
      {/* Left number badge */}
      <div className="absolute -bottom-3 -left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-main-dark/30 bg-main-light text-xl font-extrabold text-main-dark/60 transition-all duration-300 group-hover:scale-105">
        {index + 1}
      </div>

      {/* Icon + Title */}
      <div className="z-10 mx-auto flex items-center gap-3 px-8 md:mx-0">
        <div className="flex h-10 w-10 items-center justify-center">
          <Icon className="h-9 w-9 text-main-dark/70" />
        </div>
        <div className="text-md text-left leading-tight font-semibold whitespace-pre-line text-main-dark/80">
          {step.title}
        </div>
      </div>

      {/* Time badge */}
      <div className="text-md absolute -top-3 -right-4 z-20 rounded-sm bg-main-orange/80 px-2.5 font-semibold text-main-light transition-transform duration-300 group-hover:scale-105">
        {step.time}
      </div>
    </div>
  );
};

export const StepList = () => {
  const [ref, visible] = useInViewOnce(0.1);

  return (
    <div
      ref={ref}
      className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-1"
    >
      {STEPS.map((step, index) => {
        const isLast = index === STEPS.length - 1;

        const rowCls = cn(
          "flex flex-col items-center gap-6 lg:flex-row",
          isLast && "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-start",
        );

        return (
          <div key={step.id} className={rowCls}>
            <StepUnit step={step} index={index} visible={visible} />
            <div className="max-w-xs text-center text-sm leading-tight text-main-dark/80 lg:text-left">
              {step.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
