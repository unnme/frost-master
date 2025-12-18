import { useState, useEffect, useCallback } from "react";

export const useElementHeight = (ref) => {
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref]);

  useEffect(() => {
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, updateHeight]);

  return [height, updateHeight];
};
