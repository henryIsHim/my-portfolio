'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' });
      setActiveSection(href.slice(1));
    }
    setIsOpen(false);
  };

  const pillStyle = {
    maxWidth: isScrolled ? '860px' : '1152px',
    margin: isScrolled ? '12px auto 0' : '0 auto',
    padding: isScrolled ? '16px 28px' : '20px 16px',
    width: isScrolled ? 'calc(100% - 2rem)' : '100%',
    borderRadius: isScrolled ? '9999px' : '0px',
    background: isScrolled
      ? isDarkMode ? 'rgba(13, 11, 30, 0.90)' : 'rgba(255, 255, 255, 0.90)'
      : 'transparent',
    backdropFilter: isScrolled ? 'blur(14px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
    boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.08)' : 'none',
    border: isScrolled
      ? isDarkMode ? '1px solid rgba(99, 102, 241, 0.15)' : '1px solid rgba(99, 102, 241, 0.2)'
      : '1px solid transparent',
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div style={pillStyle}>
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Go to top"
            className="relative z-50 shrink-0"
          >
            <h1
              className="font-bold"
              style={{
                fontSize: isScrolled ? '1.15rem' : '1.5rem',
                transition: 'font-size 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span className="text-brand-blue-500">Henry</span>
              <span className="text-slate-900 dark:text-slate-50">Dev</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center"
            style={{ gap: isScrolled ? '16px' : '24px', transition: 'gap 0.45s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <ul className="flex" style={{ gap: isScrolled ? '20px' : '24px', transition: 'gap 0.45s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative py-1 font-medium hover:text-brand-blue-500 transition-colors
                      after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-brand-blue-500
                      after:transition-all after:duration-300 hover:after:w-full
                      ${activeSection === link.href.slice(1)
                        ? 'text-brand-blue-500 after:w-full'
                        : 'text-slate-800 dark:text-slate-100'
                      }`}
                    style={{
                      fontSize: '1rem',
                      transition: 'font-size 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 hover:text-brand-blue-500 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 transition-all duration-200 shrink-0"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 hover:text-brand-blue-500 transition-all duration-200"
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
                <span className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-200 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-200 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-slate-700 dark:bg-slate-200 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-4 z-50 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-300/30 dark:border-slate-600/30
        transform transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-4 py-2 text-base font-medium hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-brand-blue-500'
                  : 'text-slate-800 dark:text-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
