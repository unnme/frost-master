import { FEATURES } from "@config/features";

export const FeaturesBar = () => (
  <div className="relative">
    <div className="block lg:hidden">
      <div className="overflow-hidden md:-mx-8">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {FEATURES.concat(FEATURES).map((val, indx) => {
          const Icon = val.icon;
          return (
            <div
              key={indx}
              className="flex shrink-0 items-center justify-center gap-3"
            >
              <Icon className={val.iconClassName || "h-7 w-7 text-main-dark"} />
              <p className="text-md bg-highlight/60 px-0.5 font-semibold text-main-dark">
                {val.title}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </div>

    <div className="hidden flex-row justify-between lg:flex">
      {FEATURES.map((val, indx) => {
        const Icon = val.icon;
        return (
          <div
            key={indx}
            className="flex items-center justify-center gap-3"
          >
            <Icon className={val.iconClassName || "h-7 w-7 text-main-dark"} />
            <p className="text-md bg-highlight/60 px-0.5 font-semibold text-main-dark">
              {val.title}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);
