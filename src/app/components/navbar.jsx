'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll and intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
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
      const offset = 80; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="relative z-50">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">Henry</span>
              <span className="text-gray-800">Dev</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors
                      after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 
                      after:transition-all after:duration-300 hover:after:w-full
                      ${activeSection === link.href.slice(1) ? 'text-blue-600 after:w-full' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-gray-800 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-gray-800 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
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
          className={`fixed inset-x-0 top-0 z-40 h-screen bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 pt-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-2xl font-medium ${
                  activeSection === link.href.slice(1)
                    ? 'text-blue-600'
                    : 'text-gray-800'
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

