"use client";
import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import ContactForm from './components/contactForm';
import TechStack from './components/techStack';
import { experiences, education } from './data/experience';

export default function HomePage() {
  // --- TYPING ANIMATION STATE ---
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const titles = ['Full Stack Developer', 'ICT Undergraduate', 'AI Enthusiast'];

  useEffect(() => {
    let currentIndex = 0;
    const currentTitle = titles[currentTitleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
        
        // After typing is complete, wait 2 seconds then move to next title
        setTimeout(() => {
          setIsTypingComplete(false);
          setDisplayedText('');
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100); // 100ms delay between each character

    return () => clearInterval(typingInterval);
  }, [currentTitleIndex]);

  // --- FILTER STATE & LOGIC ---
  const typeOptions = [
    'All',
    'Fullstack',
    'Frontend',
    'Backend',
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
      <section id="home" className="flex flex-col lg:flex-row items-center justify-center py-8 lg:py-32 gap-8 sm:gap-12 lg:gap-16">
        {/* Left side - Profile Picture */}
        <motion.div
          className="flex justify-center items-center mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image
              src="/profile.png"
              alt="Henry's profile picture"
              fill
              className="rounded-full object-cover border-4 border-zinc-900 dark:border-zinc-100 shadow-lg"
              style={{ objectPosition: 'center' }}
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        </motion.div>

        {/* Right side - Name, Title, CTA, Social Icons */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-2">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="gradient-text">Hein Thuya Win</span>
          </h1>
          <h2 className="font-sans text-lg sm:text-xl md:text-2xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-medium mb-6 lg:mb-8 min-h-[2em] flex items-center">
            <span>{displayedText}</span>
            <span aria-hidden="true" className="ml-1 text-zinc-950 dark:text-zinc-100 animate-pulse">
              |
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 lg:mb-8 w-full sm:w-auto">
            <motion.a
              href="/henry-resume.pdf"
              download
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-base sm:text-lg rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-zinc-700 dark:bg-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <FaDownload className="text-lg sm:text-xl group-hover:animate-bounce" />
                <span>Download CV</span>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-semibold text-base sm:text-lg rounded-full hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300 ease-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-lg sm:text-xl mr-3" />
              <span>Contact Me</span>
            </motion.a>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-5">
            <a href="mailto:winheinthuya.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white active:text-zinc-950 dark:active:text-white transition-colors text-xl sm:text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/heinthuyawin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white active:text-zinc-950 dark:active:text-white transition-colors text-xl sm:text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/henryIsHim" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white active:text-zinc-950 dark:active:text-white transition-colors text-xl sm:text-2xl">
              <FaGithub />
            </a>
            <a href="https://wa.me/66967515701" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white active:text-zinc-950 dark:active:text-white transition-colors text-xl sm:text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="py-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">About Me</h2>
        </motion.div>

        <div className="space-y-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I'm a passionate and results-oriented Full Stack Developer skilled in creating end-to-end web experiences. My expertise lies in front-end development using modern frameworks like React and Next.js, complemented by hands-on experience with backend technologies, API design, and database management.
            </p>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I excel at tackling complex technical challenges and am dedicated to writing clean, efficient, and scalable code to transform innovative concepts into impactful real-world applications.
            </p>
          </motion.div>

          {/* Experience + Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-10"
          >
            {/* Experience */}
            <div>
              <div className="mb-6 pl-4 border-l-2 border-zinc-900 dark:border-zinc-100">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">Experience</h3>
              </div>
              <div>
                {experiences.map((exp, i, arr) => (
                  <div key={i} className="group flex items-stretch">

                    {/* Date — desktop only */}
                    <div className="hidden md:flex md:w-44 shrink-0 pr-5 items-start justify-end">
                      <span className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{exp.period}</span>
                    </div>

                    {/* Dot + connecting line */}
                    <div className="flex flex-col items-center w-5 shrink-0">
                      <div className="mt-1 w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-zinc-200 dark:ring-zinc-800 shrink-0 z-10" />
                      {i < arr.length - 1 && (
                        <div className="flex-1 w-0.5 bg-zinc-200 dark:bg-zinc-700 mt-2 mb-3" />
                      )}
                    </div>

                    {/* Job content */}
                    <div className={`flex-1 ${i < arr.length - 1 ? 'pb-10' : 'pb-2'} pl-4 md:pl-6 rounded-r-xl group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900/40 transition-colors duration-200`}>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{exp.title}</h4>
                        <span className="md:hidden text-[11px] text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0 mt-1">{exp.period}</span>
                      </div>
                      <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium mb-3">{exp.company} · {exp.meta}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((point, j) => (
                          <li key={j} className="flex gap-3 text-base text-zinc-600 dark:text-zinc-400">
                            <span className="shrink-0 text-zinc-400 dark:text-zinc-600 select-none mt-0.5">—</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="mb-6 pl-4 border-l-2 border-zinc-900 dark:border-zinc-100">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">Education</h3>
              </div>
              <div className="group flex items-stretch">

                {/* Date — desktop only */}
                <div className="hidden md:flex md:w-44 shrink-0 pr-5 items-start justify-end">
                  <span className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{education.period}</span>
                </div>

                {/* Dot */}
                <div className="flex flex-col items-center w-5 shrink-0">
                  <div className="mt-1 w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-zinc-200 dark:ring-zinc-800 shrink-0 z-10" />
                </div>

                {/* Education content */}
                <div className="flex-1 pb-2 pl-4 md:pl-6 rounded-r-xl group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900/40 transition-colors duration-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{education.degree}</h4>
                    <span className="md:hidden text-[11px] text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0 mt-1">{education.period}</span>
                  </div>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium mb-3">{education.school} · {education.location}</p>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">{education.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-medium">{education.honors}</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <TechStack />

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">Featured Projects</h2>
        {/* Filter Bar - Button Group */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {typeOptions.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none
                ${selectedType === type
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-sm'
                  : 'glass-effect text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100'}
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
            <div className="col-span-full text-center text-zinc-400 py-12">
              No projects match the selected type.
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 gradient-text">Get in Touch</h2>
        <p className="text-center text-zinc-800 dark:text-zinc-200 mb-10 max-w-md mx-auto px-4">
          I’m always open to discussing new projects, opportunities, or potential collaborations. Feel free to reach out — I’ll respond promptly.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto w-full">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}