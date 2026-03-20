"use client";
import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaUser, FaBriefcase, FaGraduationCap, FaReact, FaNodeJs, FaDocker, FaMedal } from 'react-icons/fa';
import { SiNextdotjs, SiMantine, SiGo, SiPostgresql } from 'react-icons/si';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import ContactForm from './components/contactForm';
import TechStack from './components/techStack';

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
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-2">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="gradient-text">Hein Thuya Win</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-6 lg:mb-8 min-h-[2em] flex items-center">
            <span>{displayedText}</span>
            <span aria-hidden="true" className="ml-1 text-brand-blue-500 animate-pulse">
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
            <a href="mailto:winheinthuya.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 active:text-red-600 dark:active:text-red-400 transition-colors text-xl sm:text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/heinthuyawin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-brand-blue-500 dark:hover:text-brand-blue-500 active:text-brand-blue-500 dark:active:text-brand-blue-500 transition-colors text-xl sm:text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/henryIsHim" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 active:text-slate-900 dark:active:text-slate-100 transition-colors text-xl sm:text-2xl">
              <FaGithub />
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

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              I'm a passionate and results-oriented Full Stack Developer skilled in creating end-to-end web experiences. My expertise lies in front-end development using modern frameworks like React and Next.js, complemented by hands-on experience with backend technologies, API design, and database management. I excel at tackling complex technical challenges and am dedicated to writing clean, efficient, and scalable code to transform innovative concepts into impactful real-world applications.
            </p>
          </motion.div>

          {/* Experience + Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-blue rounded-xl shadow">
                  <FaBriefcase className="text-white text-sm" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Experience</h3>
              </div>
              <div>
                {[
                  {
                    title: 'AI Prototyping Engineer',
                    company: 'Newl App',
                    meta: 'Remote',
                    period: 'Feb – Mar 2026',
                    bullets: [
                      'Built a full-stack AI career simulator using React, TypeScript & Supabase, powered by an LLM multi-agent pipeline with real-time web grounding via Tavily Search.',
                      'Engineered a 3-agent orchestration system (Research Architect, Wealth Calculator, Scene Synthesizer) with parallel scene generation and semantic validation.',
                    ],
                    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Edge Functions', 'LLM'],
                  },
                  {
                    title: 'Full Stack Developer',
                    company: 'Scarlett Panda',
                    meta: 'Remote',
                    period: 'Nov 2025 – Jan 2026',
                    bullets: [
                      'Built production features with Svelte & Python (FastAPI) — onboarding flows, storybook content generation, and a referral challenge system.',
                      'Optimized LLM prompt logic for AI story consistency and integrated Supabase for auth, storage, and backend services.',
                    ],
                    tags: ['Svelte', 'Python', 'FastAPI', 'Supabase', 'LLM', 'PostgreSQL'],
                  },
                  {
                    title: 'Software Developer Intern',
                    company: 'Issa Compass',
                    meta: 'Bangkok, Thailand',
                    period: 'Aug – Dec 2025',
                    bullets: [
                      'Built an internal AI workflow automation tool with React, Next.js, TypeScript & Golang (Gin) to automate and evaluate customer inquiry responses at scale.',
                      'Designed PostgreSQL schemas via TablePlus and built REST APIs to manage conversations, logs, and application data.',
                    ],
                    tags: ['React', 'Next.js', 'TypeScript', 'Golang', 'PostgreSQL', 'Git'],
                  },
                ].map((exp, i, arr) => (
                  <div key={i} className="flex items-stretch">

                    {/* Date — desktop only */}
                    <div className="hidden md:flex md:w-48 shrink-0 pr-5 items-start justify-end">
                      <span className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">{exp.period}</span>
                    </div>

                    {/* Dot + connecting line */}
                    <div className="flex flex-col items-center w-5 shrink-0">
                      <div className="mt-1 w-4 h-4 rounded-full bg-brand-blue-500 ring-4 ring-brand-blue-100 dark:ring-brand-blue-900/60 shrink-0 z-10" />
                      {i < arr.length - 1 && (
                        <div className="flex-1 w-0.5 bg-brand-blue-500/35 mt-2 mb-3" />
                      )}
                    </div>

                    {/* Job content */}
                    <div className="flex-1 pb-10 pl-4 md:pl-6">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">{exp.title}</h4>
                        <span className="md:hidden text-[11px] font-semibold text-brand-blue-500 whitespace-nowrap shrink-0 mt-1">{exp.period}</span>
                      </div>
                      <p className="text-base text-brand-blue-500 font-medium mb-3">{exp.company} · {exp.meta}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((point, j) => (
                          <li key={j} className="flex gap-2 text-base text-slate-600 dark:text-slate-400">
                            <FiCheckCircle className="shrink-0 text-brand-blue-500 mt-[3px]" size={15} />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-blue rounded-xl shadow">
                  <FaGraduationCap className="text-white text-sm" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Education</h3>
              </div>
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-shadow duration-300">
                {/* Title + year on same row */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Bachelor of Science in Information and Communication Technology</h4>
                  <span className="inline-flex items-center text-xs font-medium text-brand-blue-500 bg-brand-blue-50 dark:bg-brand-blue-900/30 border border-brand-blue-200 dark:border-brand-blue-700/40 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                    2023 – 2026
                  </span>
                </div>
                {/* FCH badge */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                    <FaMedal className="text-amber-500 text-xs" />
                    First Class Honors
                  </span>
                </div>
                <p className="text-base text-brand-blue-500 font-medium mb-2">Rangsit University · Thailand</p>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pursued a Bachelor's degree focused on software engineering, web development, and emerging technologies.
                </p>
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
                  ? 'bg-brand-blue-600 text-white border-brand-blue-600 shadow-md blue-glow'
                  : 'glass-effect text-slate-800 dark:text-slate-200 border-slate-400 dark:border-slate-600 hover:border-brand-blue-500 dark:hover:border-brand-blue-500 hover:text-brand-blue-500 dark:hover:text-brand-blue-500'}
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
      <section id="contact" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 gradient-text">Get in Touch</h2>
        <p className="text-center text-slate-800 dark:text-slate-200 mb-10 max-w-md mx-auto px-4">
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