"use client";
import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaUser, FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaReact, FaNodeJs, FaDocker, FaMedal } from 'react-icons/fa';
import { SiNextdotjs, SiMantine, SiGo, SiPostgresql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import ContactForm from './components/contactForm';
import TechStack from './components/techStack';

export default function HomePage() {
  // --- TYPING ANIMATION STATE ---
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // 100ms delay between each character

    return () => clearInterval(typingInterval);
  }, []);

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
              className="rounded-full object-cover border-4 border-brand-blue-500 shadow-lg blue-glow"
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
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-2">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="gradient-text">Hein Thuya Win</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700 dark:text-slate-300 font-medium mb-6 lg:mb-8 min-h-[2em] flex items-center">
            <span>{displayedText}</span>
            <span className={`ml-1 text-brand-blue-500 ${isTypingComplete ? 'animate-pulse' : 'animate-pulse'}`}>
              |
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 lg:mb-8 w-full sm:w-auto">
            <motion.a
              href="/henry-resume.pdf"
              download
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-blue text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl blue-glow transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-700 to-brand-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-brand-blue-500 text-brand-blue-500 dark:text-brand-blue-500 font-semibold text-base sm:text-lg rounded-full hover:bg-brand-blue-500 hover:text-white dark:hover:text-white transition-all duration-300 ease-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser className="text-lg sm:text-xl mr-3" />
              <span>Contact Info</span>
            </motion.a>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-5">
            <a href="mailto:heinthuyawin@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 active:text-red-600 dark:active:text-red-400 transition-colors text-xl sm:text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/heinthuyawin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue-500 dark:hover:text-brand-blue-500 active:text-brand-blue-500 dark:active:text-brand-blue-500 transition-colors text-xl sm:text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/henryIsHim" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-gray-200 active:text-gray-900 dark:active:text-gray-200 transition-colors text-xl sm:text-2xl">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">About Me</h2>
        <div className="max-w-6xl mx-auto">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-base md:text-lg text-gray-800 dark:text-slate-200 mb-6 text-justify">
              I'm a passionate and results-oriented Full Stack Developer skilled in creating end-to-end web experiences. My expertise lies in front-end development using modern frameworks like React and Next.js, complemented by hands-on experience with backend technologies, API design, and database management. I excel at tackling complex technical challenges and am dedicated to writing clean, efficient, and scalable code to transform innovative concepts into impactful real-world applications.
            </p>
          </motion.div>

          {/* Experience & Education Stack */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-blue rounded-2xl shadow-lg">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Experience</h3>
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-slate-100">Software Developer Intern</h4>
                    <div className="flex items-center bg-brand-blue-100 dark:bg-brand-blue-900/30 px-3 py-1 rounded-lg">
                      <FaCalendarAlt className="mr-2 text-brand-blue-600 dark:text-brand-blue-400 text-sm" />
                      <span className="text-brand-blue-600 dark:text-brand-blue-400 font-medium text-sm">Aug 2025 - Dec 2025</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <FaMapMarkerAlt className="mr-2 text-brand-blue-500" />
                    <span className="text-brand-blue-500 font-medium">Issa Compass, Thailand</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                    Developing modern web applications using React, Next.js, and Node.js. Collaborating with senior developers to build scalable solutions.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-slate-400 mr-3">Technologies:</span>
                      <div className="inline-flex flex-wrap gap-2 mt-1">
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">React</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">Next.js</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">Mantine UI</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">Node.js</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">Golang</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">PostgreSQL</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">REST API</span>
                        <span className="px-3 py-1 bg-brand-blue-500 text-white rounded-lg text-sm font-medium">Docker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-blue rounded-2xl shadow-lg">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Education</h3>
              </div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full"
              >
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-slate-100">B.Sc. in Information and Communication Technology</h4>
                    <div className="flex items-center bg-brand-blue-100 dark:bg-brand-blue-900/30 px-3 py-1 rounded-lg">
                      <FaCalendarAlt className="mr-2 text-brand-blue-600 dark:text-brand-blue-400 text-sm" />
                      <span className="text-brand-blue-600 dark:text-brand-blue-400 font-medium text-sm">Jan 2023 - Dec 2026</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <FaMapMarkerAlt className="mr-2 text-brand-blue-500" />
                    <span className="text-brand-blue-500 font-medium">Rangsit University</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                    Currently pursuing a Bachelor's degree with focus on software engineering, web development, and emerging technologies. GPA: <span className="font-bold text-brand-blue-500">3.8/4.0</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
                  ? 'bg-brand-blue-600 text-white border-brand-blue-600 shadow-md blue-glow'
                  : 'glass-effect text-gray-800 dark:text-slate-200 border-slate-400 dark:border-slate-600 hover:border-brand-blue-500 dark:hover:border-brand-blue-500 hover:text-brand-blue-500 dark:hover:text-brand-blue-500'}
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
            <div className="col-span-full text-center text-slate-400 py-12">
              No projects match the selected type.
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 gradient-text">Get in Touch</h2>
        <p className="text-center text-gray-800 dark:text-slate-200 mb-8 md:mb-12 max-w-md mx-auto px-4">
          I’m always open to discussing new projects, opportunities, or potential collaborations. Please feel free to reach out — I’ll respond promptly.
        </p>

        {/* Contact Form */}
        <ContactForm />
      </section>
    </main>
  );
}