import { useEffect } from "react";

export const useCloseOnScroll = (isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => onClose();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, onClose]);
};
