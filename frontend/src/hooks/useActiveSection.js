import { useEffect, useState } from "react";

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

    const elements = sectionIds.map((id) => document.getElementById(id));
    elements.forEach((el) => el && observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveId("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
};
