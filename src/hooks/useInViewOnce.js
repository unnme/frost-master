import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect if element is in viewport (once)
 * @param {number} threshold - Intersection threshold (0-1)
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export const useInViewOnce = (threshold = 0.3) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};
