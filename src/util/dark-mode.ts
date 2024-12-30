import { useState, useEffect } from 'react';

// Dark Mode Hook
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const darkPreference = localStorage.getItem('theme') === 'dark';
    setIsDarkMode(darkPreference);
    if (darkPreference) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDarkMode, toggleDarkMode };
}