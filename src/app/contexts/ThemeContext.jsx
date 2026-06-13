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
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // iOS WebKit (Safari, LinkedIn/IG in-app browsers) doesn't always invalidate
    // backdrop-filter composition layers on a class change, leaving transitions
    // stuck until the next user interaction. Briefly toggling a transform forces
    // a re-composite so the new theme paints immediately.
    root.style.transform = 'translateZ(0)';
    void root.offsetHeight;
    root.style.transform = '';
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (e) {
      // preference won't persist this session, but the class toggle still works
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};