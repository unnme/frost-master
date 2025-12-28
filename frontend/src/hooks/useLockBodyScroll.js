import { useEffect } from "react";

/**
 * Hook to lock body scroll (e.g., when modal is open)
 */
export const useLockBodyScroll = (locked) => {
	useEffect(() => {
		if (!locked) return;

		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = prev;
		};
	}, [locked]);
};

