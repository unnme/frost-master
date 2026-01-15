import { AboutStatsBar } from "./aboutSection/AboutStatsBar";
import { ReviewsCarousel } from "./aboutSection/ReviewsCarousel";
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

import thought from "@images/thought.png";
import masterIMG from "@images/master.png";

export const AboutSection = () => {
	const faqRef = useRef(null);
	const [openIndex, setOpenIndex] = useState(0);
	const [faqHeight, updateHeight] = useElementHeight(faqRef);
	const [ref, visible] = useInViewOnce();

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
			<div className="grid items-center gap-10 px-6 pb-12 lg:grid-cols-2">
				<div className="px-6">
					<AboutMasterText />
				</div>
				<img
					src={masterIMG}
					alt="Мастер по ремонту холодильников Александр с 10-летним опытом работы"
					loading="lazy"
					className="mx-auto max-h-100 object-cover"
				/>
			</div>

			{/* StepsAndPriceBlock */}
			<div className="relative pt-10 lg:pb-10">
				<SectionBackground
					variant="right"
					className="max-h-250 md:max-h-170 lg:max-h-full"
				/>

				<div className="pb-10">
					<h2
						ref={ref}
						className={cn(
							"text-center text-4xl font-extrabold text-main-dark/90 transition-all duration-1200 ease-out lg:px-20",
							visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
						)}
					>
						Как мы работаем
					</h2>
				</div>

				<div className="grid gap-y-16 md:gap-y-30 lg:grid-cols-[2fr_1.5fr]">
					<div className="pt-3 lg:px-14">
						<StepList />
					</div>
					<div className="sm:px-6 lg:px-0">
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
				<SectionBackground variant="left" />

				<div className="pb-10">
					<h2
						ref={ref}
						className={cn(
							"px-10 text-center text-4xl font-extrabold text-main-dark/90 transition-all duration-1200 ease-out lg:px-20",
							visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
						)}
					>
						Часто задаваемые вопросы
					</h2>
				</div>

				<div className="flex flex-col items-center justify-between gap-y-10 px-6 min-[1015px]:flex-row">
					<div
						className="max-w-xl flex-1 lg:max-w-2xl lg:px-6"
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

			<div className="relative mt-20 pt-10 lg:pb-10">
				<SectionBackground />

				{/* ReviewsCarousel */}
				<div className="px-6 pt-10">
					<ReviewsCarousel />
				</div>
			</div>

			{/* BrandsStrip */}
			<div className="px-12 py-12 pt-24">
				<BrandsStrip />
			</div>
		</section>
	);
};
