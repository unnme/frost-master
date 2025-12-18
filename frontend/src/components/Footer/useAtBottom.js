import { useEffect, useState } from "react";

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isBottom;
};
