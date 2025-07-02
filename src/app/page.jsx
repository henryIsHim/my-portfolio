"use client";
import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDownload, FaLine, FaEnvelopeOpenText, FaEnvelopeOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import ContactForm from './components/contactForm';

export default function HomePage() {
  // --- FILTER STATE & LOGIC ---
  const typeOptions = [
    'All',
    'Full Stack',
    'Front End',
    'Back End',
    'Data Science',
  ];
  const [selectedType, setSelectedType] = useState('All');

  // Filter projects by selected type
  const filteredProjects = useMemo(() => {
    if (selectedType === 'All') return projects;
    return projects.filter(project => project.type === selectedType);
  }, [selectedType]);

  return (
    <main className="container mx-auto px-4 overflow-hidden">
      {/* Hero Section */}
      <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-between py-8 md:py-32 gap-8">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hey, I'm Henry 👋
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6 text-justify">
            I'm a final-year ICT student at Rangsit University International College, specializing in Full Stack Web Development with hands-on experience in AI and Machine Learning projects. I'm passionate about solving real problems through clean, efficient code and smart systems. <span className="font-bold text-gray-900">Currently seeking internship opportunities</span> to learn, grow, and make an impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="/henry-resume.pdf"
              download
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <FaDownload className="text-xl group-hover:animate-bounce" />
                <span>Download CV</span>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.a>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center md:justify-start gap-5 mt-7 ml-1">
            <a href="https://www.facebook.com/heinthuya.win.14" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition-colors text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/hein_tyw?igsh=c3RtbDNoc2VyemRx&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors text-2xl">
              <FaInstagram />
            </a>
            <a href="https://line.me/ti/p/VUjEXXy61p" target="_blank" rel="noopener noreferrer" aria-label="Line" className="text-gray-500 hover:text-green-600 transition-colors text-2xl">
              <FaLine />
            </a>
            <a href="https://www.linkedin.com/in/heinthuyawin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/henryIsHim" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-black transition-colors text-2xl">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Right side - Profile Picture */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <Image
              src="/profile.jpg"
              alt="Henry's profile picture"
              fill
              className="rounded-full object-cover border-4 border-blue-600 shadow-lg"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
            />
          </div>
        </motion.div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Projects</h2>
        {/* Filter Bar - Button Group */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {typeOptions.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none
                ${selectedType === type
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900'}
              `}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-12">
              No projects match the selected type.
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-md mx-auto px-4">
          I’m always open to discussing new projects, opportunities, or potential collaborations. Please feel free to reach out — I’ll respond promptly.
        </p>

        {/* Contact Form */}
        <ContactForm />
      </section>
    </main>
  );
}