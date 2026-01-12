import { useState, useEffect, useCallback } from "react";

/**
 * Hook to track element height using ResizeObserver
 * @param {React.RefObject} ref - Ref to element to observe
 * @returns {[number, Function]} - [height, updateHeight function]
 */
export const useElementHeight = (ref) => {
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [updateHeight]);

  return [height, updateHeight];
};
