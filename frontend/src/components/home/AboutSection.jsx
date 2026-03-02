import { AboutStatsBar } from "./aboutSection/AboutStatsBar";
import { BrandsStrip } from "./aboutSection/BrandsStrip";
import { FaqList } from "./aboutSection/FaqList";
import { StepList } from "./aboutSection/StepList";
import { PriceList } from "./aboutSection/PriceList";

import { useState, useEffect } from "react";
import { useInViewOnce } from "@hooks/useInViewOnce";
import { SectionBackground } from "@components/common/SectionBackground";
import { cn } from "@utils/cn";

import { ServiceList } from "./aboutSection/ServiceList";
import { GuaranteesBar } from "./aboutSection/GuaranteesBar";
import { RepairTagsBar } from "./heroSection/RepairTagsBar";

import { ConciergeBell, ListOrdered, CircleHelp } from "lucide-react";

import faqIMG from "@images/faq.jpg";

const sectionTitleCls =
  "flex items-center justify-center gap-3 text-4xl font-extrabold leading-none text-main-dark/90";
const slideInCls = "px-6 transition-all duration-1200 ease-out md:px-8";

export const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [servicesTitleRef, servicesTitleVisible] = useInViewOnce(0.1);
  const [stepsRef, stepsVisible] = useInViewOnce(0.1);
  const [faqTitleRef, faqTitleVisible] = useInViewOnce(0.1);
  const [faqRef, faqVisible] = useInViewOnce(0.1);

  useEffect(() => {
    if (!faqVisible) return;
    const timer = setTimeout(() => setOpenIndex(0), 500);
    return () => clearTimeout(timer);
  }, [faqVisible]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="scroll-mt-28">
      {/* tmp_spacer */}
      <div className="h-18" />

      {/* Services */}
      <div className="relative pb-12">
        <SectionBackground variant="full" />
        <div
          ref={servicesTitleRef}
          className={cn(
            slideInCls,
            "py-12",
            servicesTitleVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0",
          )}
        >
          <h2 className={sectionTitleCls}>
            <ConciergeBell className="h-8 w-8 shrink-0 text-main-dark/90" />
            Наши услуги
          </h2>
          <p className="mt-2 text-center text-main-dark/70">
            Полный спектр услуг по ремонту холодильников
          </p>
        </div>
        <ServiceList />
      </div>

      {/* RepairTagsBar */}
      <div className="py-12">
        <RepairTagsBar />
      </div>

      {/* StepsAndPriceBlock */}
      <div className="relative lg:pb-12">
        {/* Mobile: full background covering title + steps */}
        <SectionBackground
          variant="full"
          className="sm:max-h-266 md:hidden"
        />
        {/* Hidden on mobile, right-side background on md+ */}
        <SectionBackground
          variant="right"
          className="hidden max-h-250 md:max-h-180 lg:max-h-full"
        />

        {/* Title outside grid so the line spans full width */}
        <div
          ref={stepsRef}
          className={cn(
            slideInCls,
            "py-12",
            stepsVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0",
          )}
        >
          <h2 className={sectionTitleCls}>
            <ListOrdered className="h-8 w-8 shrink-0 text-main-dark/90" />
            Как мы работаем
          </h2>
          <p className="mt-2 text-center text-main-dark/70">
            Прозрачный процесс — от звонка до готового результата
          </p>
        </div>

        <div className="grid gap-y-12 md:gap-y-24 lg:grid-cols-[2fr_1.5fr]">
          {/* Steps column */}
          <div className="sm:pb-12 md:pb-0">
            <div className="px-6 pt-3 md:px-8">
              <StepList />
            </div>
          </div>

          <div className="px-0 sm:px-6 md:px-8 lg:px-0">
            <PriceList />
          </div>
        </div>
      </div>

      {/* AboutStatsBar */}
      <div className="py-12">
        <AboutStatsBar />
      </div>

      {/* faqBlog */}
      <div
        ref={faqRef}
        className="relative pb-12"
      >
        <SectionBackground variant="full" />

        <div className="py-12">
          <div
            ref={faqTitleRef}
            className={cn(
              slideInCls,
              faqTitleVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0",
            )}
          >
            <h2 className={sectionTitleCls}>
              <CircleHelp className="h-8 w-8 shrink-0 text-main-dark/90" />
              Часто задаваемые вопросы
            </h2>
            <p className="mt-2 text-center text-main-dark/70">
              Ответы на популярные вопросы о ремонте
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 px-6 min-[1015px]:grid-cols-[1fr_1fr] md:px-8">
          <FaqList
            openIndex={openIndex}
            toggle={toggle}
          />

          <div className="min-h-64 overflow-hidden rounded-2xl min-[1015px]:min-h-0 sm:min-h-80">
            <img
              src={faqIMG}
              alt="Часто задаваемые вопросы о ремонте холодильников"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* GuaranteesBar */}
      <GuaranteesBar />

      {/* BrandsStrip */}
      <div className="relative py-12">
        <SectionBackground variant="full" />
        <BrandsStrip />
      </div>

      {/* tmp_spacer */}
      <div className="h-18" />
    </section>
  );
};
