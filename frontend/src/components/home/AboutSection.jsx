import { AboutStatsBar } from "./aboutSection/AboutStatsBar";
import { BrandsStrip } from "./aboutSection/BrandsStrip";
import { AboutMasterText } from "./aboutSection/AboutMasterText";
import { FaqList } from "./aboutSection/FaqList";
import { StepList } from "./aboutSection/StepList";
import { PriceList } from "./aboutSection/PriceList";

import { useState, useRef } from "react";
import { useInViewOnce } from "@hooks/useInViewOnce";
import { SectionBackground } from "@components/common/SectionBackground";
import { cn } from "@utils/cn";

import { ServiceList } from "./aboutSection/ServiceList";
import { RepairTagsBar } from "./heroSection/RepairTagsBar";

import { ConciergeBell, ListOrdered, CircleHelp } from "lucide-react";

import faqIMG from "@images/faq.jpg";
import masterIMG from "@images/master.png";

const sectionTitleCls = "flex items-center justify-center gap-3 text-4xl font-extrabold text-main-dark/90";
const slideInCls = "px-6 transition-all duration-1200 ease-out md:px-8";

export const AboutSection = () => {
	const [openIndex, setOpenIndex] = useState(0);
	const [stepsRef, stepsVisible] = useInViewOnce(0.1);
	const [faqTitleRef, faqTitleVisible] = useInViewOnce(0.1);

	const toggle = (index) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section
			id="about"
			className="scroll-mt-28"
		>
			{/* MasterInfoBlock */}
			<div className="grid items-center gap-10 px-6 pb-12 md:px-8 lg:grid-cols-2">
				<div className="rounded-2xl bg-brand-frost/10 p-6">
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
					<h2 className={sectionTitleCls}>
						<ConciergeBell className="h-9 w-9 shrink-0 text-main-orange" />
						Услуги
					</h2>
					<p className="mt-2 text-center text-main-dark/70">Полный спектр услуг по ремонту холодильников</p>
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

				{/* Title outside grid so the line spans full width */}
				<div
					ref={stepsRef}
					className={cn(
						slideInCls, "pb-10",
						stepsVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
					)}
				>
					<h2 className={sectionTitleCls}>
						<ListOrdered className="h-9 w-9 shrink-0 text-main-orange" />
						Как мы работаем
					</h2>
					<p className="mt-2 text-center text-main-dark/70">Прозрачный процесс — от звонка до готового результата</p>
				</div>

				<div className="grid gap-y-16 md:gap-y-30 lg:grid-cols-[2fr_1.5fr]">
					{/* Steps column with mobile-only background */}
					<div className="relative py-10 md:py-0 md:pb-10">
						<SectionBackground variant="full" className="md:hidden" />

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
							slideInCls,
							faqTitleVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
						)}
					>
						<h2 className={sectionTitleCls}>
							<CircleHelp className="h-9 w-9 shrink-0 text-main-orange" />
							Часто задаваемые вопросы
						</h2>
						<p className="mt-2 text-center text-main-dark/70">Ответы на популярные вопросы о ремонте холодильников</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-10 px-6 md:px-8 min-[1015px]:grid-cols-[1fr_1fr]">
					<FaqList
						openIndex={openIndex}
						toggle={toggle}
					/>

					<div className="overflow-hidden rounded-2xl min-h-64 sm:min-h-80 min-[1015px]:min-h-0">
						<img
							src={faqIMG}
							alt="Часто задаваемые вопросы о ремонте холодильников"
							loading="lazy"
							className="h-full w-full object-cover"
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
