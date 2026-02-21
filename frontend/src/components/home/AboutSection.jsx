import { AboutStatsBar } from "./aboutSection/AboutStatsBar";
import { BrandsStrip } from "./aboutSection/BrandsStrip";
import { AboutMasterText } from "./aboutSection/AboutMasterText";
import { FaqList } from "./aboutSection/FaqList";
import { StepList } from "./aboutSection/StepList";
import { PriceList } from "./aboutSection/PriceList";

import { useState, useRef } from "react";
import { useElementHeight } from "@hooks/useElementHeight";
import { useInViewOnce } from "@hooks/useInViewOnce";
import { SectionBackground } from "@components/common/SectionBackground";
import { cn } from "@utils/cn";

import { ServiceList } from "./aboutSection/ServiceList";
import { RepairTagsBar } from "./heroSection/RepairTagsBar";

import { ConciergeBell, ListOrdered, CircleHelp } from "lucide-react";

import thought from "@images/thought.png";
import masterIMG from "@images/master.png";

export const AboutSection = () => {
	const faqRef = useRef(null);
	const [openIndex, setOpenIndex] = useState(0);
	const [faqHeight, updateHeight] = useElementHeight(faqRef);
	const [stepsRef, stepsVisible] = useInViewOnce(0.1);
	const [faqTitleRef, faqTitleVisible] = useInViewOnce(0.1);

	const toggle = (index) => {
		setOpenIndex((prev) => (prev === index ? null : index));
		setTimeout(updateHeight, 20);
	};

	return (
		<section
			id="about"
			className="scroll-mt-28"
		>
			{/* MasterInfoBlock */}
			<div className="grid items-center gap-10 px-6 pb-12 md:px-8 lg:grid-cols-2">
				<div>
					<AboutMasterText />
				</div>
				<img
					src={masterIMG}
					alt="Мастер по ремонту холодильников Александр с 10-летним опытом работы"
					loading="lazy"
					className="mx-auto max-h-100 object-cover"
				/>
			</div>

			{/* Services */}
			<div className="relative py-10">
				<SectionBackground variant="full" />

				<div className="pb-10 px-6 md:px-8">
					<h2 className="flex items-center gap-3 text-4xl font-extrabold text-main-dark/90">
						<ConciergeBell className="h-9 w-9 shrink-0 text-main-orange" />
						Услуги
						<span className="mt-1 h-0.5 flex-1 bg-main-orange/35" />
					</h2>
					<p className="mt-2 text-main-dark/70">Полный спектр услуг по ремонту холодильников</p>
				</div>

				<ServiceList />
			</div>

			{/* RepairTagsBar */}
			<div className="py-10">
				<RepairTagsBar />
			</div>

			{/* StepsAndPriceBlock */}
			<div className="relative pt-10 lg:pb-10">
				{/* Hidden on mobile, right-side background on md+ */}
				<SectionBackground
					variant="right"
					className="hidden max-h-250 md:max-h-170 lg:max-h-full"
				/>

				<div className="grid gap-y-16 md:gap-y-30 lg:grid-cols-[2fr_1.5fr]">
					{/* Steps column with mobile-only background */}
					<div className="relative py-10 md:py-0 md:pb-10">
						<SectionBackground variant="full" className="md:hidden" />

						<div
							ref={stepsRef}
							className={cn(
								"px-6 pb-10 transition-all duration-1200 ease-out md:px-8",
								stepsVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
							)}
						>
							<h2 className="flex items-center gap-3 text-4xl font-extrabold text-main-dark/90">
								<ListOrdered className="h-9 w-9 shrink-0 text-main-orange" />
								Как мы работаем
								<span className="mt-1 h-0.5 flex-1 bg-main-orange/35" />
							</h2>
							<p className="mt-2 text-main-dark/70">Прозрачный процесс — от звонка до готового результата</p>
						</div>

						<div className="pt-3 px-6 md:px-8">
							<StepList />
						</div>
					</div>

					<div className="px-0 sm:px-6 md:px-8 lg:px-0">
						<PriceList />
					</div>
				</div>
			</div>

			{/* AboutStatsBar */}
			<div className="py-10">
				<AboutStatsBar />
			</div>

			{/* faqBlog */}
			<div className="relative py-10">
				<SectionBackground variant="full" />

				<div className="pb-10">
					<div
						ref={faqTitleRef}
						className={cn(
							"px-6 transition-all duration-1200 ease-out md:px-8",
							faqTitleVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
						)}
					>
						<h2 className="flex items-center gap-3 text-4xl font-extrabold text-main-dark/90">
							<CircleHelp className="h-9 w-9 shrink-0 text-main-orange" />
							Часто задаваемые вопросы
							<span className="mt-1 h-0.5 flex-1 bg-main-orange/35" />
						</h2>
						<p className="mt-2 text-main-dark/70">Ответы на популярные вопросы о ремонте холодильников</p>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-y-10 px-6 md:px-8 min-[1015px]:flex-row">
					<div
						className="max-w-xl flex-1 lg:max-w-2xl"
						ref={faqRef}
					>
						<FaqList
							openIndex={openIndex}
							toggle={toggle}
						/>
					</div>

					<div
						className="flex w-full max-w-none items-start lg:h-(--faq-height) lg:max-w-xl lg:items-center"
						style={{ "--faq-height": `${faqHeight}px` }}
					>
						<img
							src={thought}
							alt="Часто задаваемые вопросы о ремонте холодильников"
							loading="lazy"
							className="max-h-[260px] w-full object-contain sm:max-h-80 lg:max-h-none"
						/>
					</div>
				</div>
			</div>

			{/* BrandsStrip */}
			<div className="py-20">
				<BrandsStrip />
			</div>
		</section>
	);
};
