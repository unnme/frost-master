import { PriceBenefits } from "./heroSection/PriceBenefits";
import { CallbackForm } from "./heroSection/CallbackForm";
import { FeaturesBar } from "./heroSection/FeaturesBar";
import { HeroBanner } from "./heroSection/HeroBanner";
import { SectionBackground } from "@components/common/SectionBackground";

export const HeroSection = ({ heading }) => {
  return (
    <section
      id="hero"
      className="scroll-mt-22"
    >
      <div className="overflow-hidden lg:rounded-t-2xl">
        <HeroBanner heading={heading} />
      </div>

      <div className="py-6 md:px-8">
        <FeaturesBar />
      </div>

      <div className="relative md:px-8 lg:px-0 lg:py-10">
        <div className="flex flex-col gap-x-16 gap-y-18 lg:flex-row">
          <SectionBackground variant="left" className="ml-5 border-r-0 hidden md:hidden lg:block md:rounded-none lg:rounded-l-4xl" />
          <div className="flex-4">
            <CallbackForm />
          </div>
          <div className="flex-3">
            <PriceBenefits />
          </div>
        </div>
      </div>

    </section>
  );
};
