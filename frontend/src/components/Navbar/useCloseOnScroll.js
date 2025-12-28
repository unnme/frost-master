import { useEffect } from "react";

/**
 * Hook to close menu on scroll
 * @param {boolean} isOpen - Whether menu is open
 * @param {Function} onClose - Callback to close menu
 */
export const useCloseOnScroll = (isOpen, onClose) => {
	useEffect(() => {
		if (!isOpen) return;

		const handleScroll = () => onClose();

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isOpen, onClose]);
};

