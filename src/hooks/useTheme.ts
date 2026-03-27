import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'bw');
    root.classList.add('light');
  }, []);

  return { theme: 'light' as const };
};
