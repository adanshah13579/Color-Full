'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else {
      // Default to light theme
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Apply theme to document
    const root = document.documentElement;
    const body = document.body;
    const main = document.querySelector('main');

    if (theme === 'dark') {
      root.classList.add('dark');
      body.style.setProperty('background-color', '#0a0a0a', 'important');
      if (main) main.style.setProperty('background-color', '#0a0a0a', 'important');
    } else {
      root.classList.remove('dark');
      body.style.setProperty('background-color', '#ffffff', 'important');
      if (main) main.style.setProperty('background-color', '#ffffff', 'important');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
