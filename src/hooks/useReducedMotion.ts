import { useEffect, useState } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function getInitialPreference(): boolean {
  return typeof window !== 'undefined'
    ? window.matchMedia(REDUCED_MOTION_QUERY).matches
    : false;
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(getInitialPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const handleChange = (event: MediaQueryListEvent): void => {
      setReduced(event.matches);
    };

    setReduced(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return reduced;
}
