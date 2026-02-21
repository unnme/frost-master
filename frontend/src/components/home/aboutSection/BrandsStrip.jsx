import { useCallback, useRef, useState } from "react";
import { useInViewOnce } from "@hooks/useInViewOnce";
import { BRANDS } from "@config/brands";
import { cn } from "@utils/cn";
import { BadgeCheck } from "lucide-react";

const HALF = Math.ceil(BRANDS.length / 2);
const PAGES = [BRANDS.slice(0, HALF), BRANDS.slice(HALF)];

const BrandCard = ({ name, logo }) => (
	<div className="flex items-center justify-center rounded-lg bg-white p-3">
		<img
			src={logo}
			alt={`Ремонт холодильников ${name}`}
			className="h-10 max-w-full object-contain"
			loading="lazy"
		/>
	</div>
);

export const BrandsStrip = () => {
	const [activePage, setActivePage] = useState(0);
	const scrollRef = useRef(null);
	const [ref, visible] = useInViewOnce(0.1);

	const handleScroll = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		const page = Math.round(el.scrollLeft / el.clientWidth);
		setActivePage(page);
	}, []);

	const goToPage = (page) => {
		const el = scrollRef.current;
		if (!el) return;
		el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
	};

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all duration-700 ease-out",
				visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
			)}
		>
			<div className="mb-12 px-6 md:px-8">
				<h2 className="flex items-center gap-3 text-4xl font-extrabold text-main-dark/90">
					<BadgeCheck className="h-9 w-9 shrink-0 text-main-orange" />
					Обслуживаемые марки
					<span className="mt-1 h-0.5 flex-1 bg-main-orange/35" />
				</h2>
				<p className="mt-2 text-main-dark/60">
					Ремонтируем холодильники любых производителей
				</p>
			</div>

			<div className="px-6 md:px-8">
				{/* Mobile carousel */}
				<div className="md:hidden">
					<div
						ref={scrollRef}
						onScroll={handleScroll}
						className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
					>
						{PAGES.map((page, i) => (
							<div
								key={i}
								className="grid w-full shrink-0 snap-center grid-cols-4 gap-3"
							>
								{page.map((brand) => (
									<BrandCard key={brand.name} {...brand} />
								))}
							</div>
						))}
					</div>

					<div className="mt-4 flex justify-center gap-2">
						{PAGES.map((_, i) => (
							<button
								key={i}
								onClick={() => goToPage(i)}
								aria-label={`Страница ${i + 1}`}
								className={`h-2 rounded-full transition-all ${
									activePage === i
										? "w-6 bg-main-orange"
										: "w-2 bg-main-orange/30"
								}`}
							/>
						))}
					</div>
				</div>

				{/* Desktop grid */}
				<div className="hidden gap-3 md:grid md:grid-cols-7 lg:grid-cols-8">
					{BRANDS.map((brand) => (
						<BrandCard key={brand.name} {...brand} />
					))}
				</div>
			</div>
		</div>
	);
};
