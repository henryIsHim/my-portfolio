'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { isDarkMode, toggleTheme } = useTheme();

  // Handle scroll and section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust viewport offset

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      // Immediately update active section
      setActiveSection(href.slice(1));

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-slate-300/30 dark:border-slate-600/30">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="relative z-50">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600 dark:text-brand-blue-400">Henry</span>
              <span className="text-slate-900 dark:text-slate-50">Dev</span>
            </h1>
          </a>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative py-2 text-gray-800 dark:text-slate-100 font-medium hover:text-brand-blue-400 transition-colors
                      after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-brand-blue-400 
                      after:transition-all after:duration-300 hover:after:w-full
                      ${activeSection === link.href.slice(1) ? 'text-brand-blue-400 after:w-full' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-gray-800 dark:text-slate-200 hover:text-brand-blue-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-gray-800 dark:text-slate-200 hover:text-brand-blue-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-200 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-200 transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                    }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-200 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-4 z-50 w-32 glass-effect rounded-lg shadow-lg border border-slate-300/30 dark:border-slate-600/30
          transform transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <div className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2 text-base font-medium hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors ${activeSection === link.href.slice(1)
                  ? 'text-brand-blue-400'
                  : 'text-gray-800 dark:text-slate-100'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;