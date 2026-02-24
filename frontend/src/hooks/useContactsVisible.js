import { useEffect, useState } from "react";

/**
 * Tracks whether the #contacts section is visible in the viewport.
 * Used to hide the floating call button when contacts are on screen.
 */
export const useContactsVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contacts");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return isVisible;
};
