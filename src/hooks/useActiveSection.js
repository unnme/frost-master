import { useEffect, useState } from "react";

/**
 * Hook to track active section in viewport using IntersectionObserver
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @returns {string|null} - Active section ID or null
 */
export const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveId("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
};
