import { type Ref, useEffect, useRef, useState } from "react";

type Result<T extends Element> = {
  ref: Ref<T | null>;
  width: number;
  height: number;
};

export function useResizeObserverHook<T extends Element>(
  refElement?: HTMLElement,
): Result<T> {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current ?? refElement;
    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setWidth(width);
      setHeight(height);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [refElement]);

  return { ref, width, height };
}
