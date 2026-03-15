import { useEffect, useState } from 'react';

const STORAGE_KEY = 'raushan-theme';

export function useTheme() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = saved || (systemPrefersDark ? 'dark' : 'light');

    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      localStorage.setItem(STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  };

  return { theme, toggleTheme, mounted };
}
