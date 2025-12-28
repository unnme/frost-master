import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect scroll direction (hide/show navbar on scroll)
 * @returns {boolean} - true if should be visible, false if should be hidden
 */
export const useScrollDirection = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
};
