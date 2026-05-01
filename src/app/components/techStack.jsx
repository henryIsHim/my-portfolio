"use client";
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAws,
  FaLinux,
  FaJava
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFramer,
  SiVercel,
  SiTypescript,
  SiExpress,
  SiDotnet,
  SiGo,
  SiSupabase,
  SiSvelte,
  SiFastapi,
} from 'react-icons/si';

const TechStack = () => {
  const { isDarkMode } = useTheme();

  const coreSkills = [
    { name: 'React',       icon: FaReact,      color: '#61DAFB', subtitle: 'Frontend Core' },
    { name: 'Next.js',     icon: SiNextdotjs,  color: isDarkMode ? '#ffffff' : '#1e1b4b', subtitle: 'App Framework' },
    { name: 'TypeScript',  icon: SiTypescript, color: '#3178C6', subtitle: 'Type-Safe Dev' },
    { name: 'Node.js',     icon: FaNodeJs,     color: '#339933', subtitle: 'Backend Core' },
    { name: 'PostgreSQL',  icon: SiPostgresql, color: '#336791', subtitle: 'Primary DB' },
    { name: 'Supabase',    icon: SiSupabase,   color: '#3ECF8E', subtitle: 'Auth & BaaS' },
  ];

  const allTech = [
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript',    icon: FaJs,          color: '#F7DF1E' },
        { name: 'HTML5',         icon: FaHtml5,        color: '#E34F26' },
        { name: 'CSS3',          icon: FaCss3Alt,      color: '#1572B6' },
        { name: 'Tailwind CSS',  icon: SiTailwindcss,  color: '#06B6D4' },
        { name: 'Svelte',        icon: SiSvelte,       color: '#FF3E00' },
        { name: 'Bootstrap',     icon: FaBootstrap,    color: '#7952B3' },
        { name: 'Framer Motion', icon: SiFramer,       color: '#0055FF' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Express',   icon: SiExpress,  color: isDarkMode ? '#ffffff' : '#000000' },
        { name: 'Golang',    icon: SiGo,       color: '#00ADD8' },
        { name: 'Python',    icon: FaPython,   color: '#3776AB' },
        { name: 'FastAPI',   icon: SiFastapi,  color: '#009688' },
        { name: '.NET Core', icon: SiDotnet,   color: '#512BD4' },
        { name: 'Java',      icon: FaJava,     color: '#ED8B00' },
      ],
    },
    {
      category: 'Database & Tools',
      items: [
        { name: 'MongoDB',  icon: SiMongodb,  color: '#47A248' },
        { name: 'MySQL',    icon: SiMysql,    color: '#4479A1' },
        { name: 'Git',      icon: FaGitAlt,   color: '#F05032' },
        { name: 'Docker',   icon: FaDocker,   color: '#2496ED' },
        { name: 'AWS',      icon: FaAws,      color: '#FF9900' },
        { name: 'Vercel',   icon: SiVercel,   color: isDarkMode ? '#ffffff' : '#000000' },
        { name: 'Linux',    icon: FaLinux,    color: '#FCC624' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
        Tech Stack
      </h2>

      {/* Core Skills — Marquee */}
      <div className="mb-12">
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-center mb-6">
          Core Skills
        </p>
        {/* Mobile — animated + swipeable */}
        <div
          className="md:hidden overflow-x-auto scrollbar-hide"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex gap-4 motion-safe:animate-marquee">
            {[...coreSkills, ...coreSkills, ...coreSkills].map((skill, i) => {
              const Icon = skill.icon;
              const isDuplicate = i >= coreSkills.length;
              return (
                <div
                  key={i}
                  aria-hidden={isDuplicate ? 'true' : undefined}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm w-36 shrink-0"
                >
                  <Icon className="text-4xl" style={{ color: skill.color }} />
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-100 text-center leading-tight">
                    {skill.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center leading-tight">
                    {skill.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop — animated marquee */}
        <div
          className="hidden md:block overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex gap-4 motion-safe:animate-marquee hover:[animation-play-state:paused]">
            {[...coreSkills, ...coreSkills, ...coreSkills].map((skill, i) => {
              const Icon = skill.icon;
              const isDuplicate = i >= coreSkills.length;
              return (
                <div
                  key={i}
                  aria-hidden={isDuplicate ? 'true' : undefined}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 w-36 shrink-0 cursor-default"
                >
                  <Icon className="text-4xl" style={{ color: skill.color }} />
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-100 text-center leading-tight">
                    {skill.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center leading-tight">
                    {skill.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* All Technologies */}
      <div>
        <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-center mb-6">
          All Technologies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {allTech.map((group, gi) => (
            <motion.div
              key={group.category}
              className="bg-white/60 dark:bg-zinc-900/60 rounded-2xl p-5 border border-zinc-200/50 dark:border-zinc-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100/80 dark:bg-zinc-800/60 rounded-full text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-200"
                    >
                      <Icon style={{ color: tech.color }} className="text-base shrink-0" />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
