import { Benefits } from "./heroSection/Benefits";
import { CallbackForm } from "./heroSection/CallbackForm";
import { FeaturesBar } from "./heroSection/FeaturesBar";
import { HeroBanner } from "./heroSection/HeroBanner";
import { RepairTagsBar } from "./heroSection/RepairTagsBar.jsx";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-22"
    >
      <div className="overflow-hidden lg:rounded-t-2xl">
        <HeroBanner />
      </div>

      <div className="py-6 md:px-8">
        <FeaturesBar />
      </div>

      <div className="relative px-0 md:px-6 lg:px-0 lg:py-10">
        <div className="flex flex-col gap-x-16 gap-y-18 lg:flex-row">
          <div className="pointer-events-none absolute inset-0 -z-1 ml-5 hidden rounded-l-4xl border border-r-0 border-main-dark/5 bg-main-dark/5 lg:block" />
          <div className="flex-4">
            <CallbackForm />
          </div>
          <div className="flex-3">
            <Benefits />
          </div>
        </div>
      </div>

      <div className="pt-12">
        <RepairTagsBar />
      </div>
    </section>
  );
};
