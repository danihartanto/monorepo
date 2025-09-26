// packages/web/src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    // Dulu 'addListener', sekarang 'addEventListener' lebih disarankan
    try {
       media.addEventListener('change', listener);
    } catch (e) {
       media.addListener(listener);
    }

    // Cleanup listener saat komponen di-unmount
    return () => {
      try {
        media.removeEventListener('change', listener);
      } catch(e) {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
};