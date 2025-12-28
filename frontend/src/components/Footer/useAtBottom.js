import { useEffect, useState } from "react";

/**
 * Hook to detect if user scrolled to bottom of page
 * @param {number} offset - Offset from bottom in pixels
 * @returns {boolean} - true if at bottom
 */
export const useAtBottom = (offset = 50) => {
	const [isBottom, setIsBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const viewportHeight = window.innerHeight;
			const fullHeight = document.documentElement.scrollHeight;

			const atBottom = scrollTop + viewportHeight >= fullHeight - offset;

			setIsBottom(atBottom);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [offset]);

	return isBottom;
};

