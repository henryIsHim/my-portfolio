"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    } catch (e) {
      // localStorage may throw in in-app browsers (LinkedIn, IG) or private mode — keep default
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

    root.classList.toggle('dark', isDarkMode);

    // Keep browser/UI rendering mode in sync with app theme.
    const scheme = isDarkMode ? 'dark' : 'light';
    root.style.colorScheme = scheme;
    if (metaColorScheme) {
      metaColorScheme.setAttribute('content', scheme);
    }

    // Some in-app browsers (LinkedIn/IG WebView) defer paint updates for
    // composited layers (e.g. backdrop-filter) until another interaction.
    // A tiny forced reflow + frame callback makes the theme switch immediate.
    root.style.webkitTransform = 'translateZ(0)';
    body.style.webkitTransform = 'translateZ(0)';
    void root.offsetHeight;
    void body.offsetHeight;
    requestAnimationFrame(() => {
      root.style.webkitTransform = '';
      body.style.webkitTransform = '';
      window.dispatchEvent(new Event('resize'));
    });

    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (e) {
      // preference won't persist this session, but the class toggle still works
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};