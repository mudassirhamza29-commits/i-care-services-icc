import { useEffect, useRef, useState } from 'react';

export type UseInViewResult<T extends Element> = [
  React.RefObject<T>,
  boolean,
];

export function useInView<T extends Element = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
): UseInViewResult<T> {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return [ref, isInView];
}
