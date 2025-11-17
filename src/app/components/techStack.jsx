"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
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
  SiNetlify,
  SiTypescript,
  SiExpress,
  SiDotnet,
  SiGo,
  SiSupabase
} from 'react-icons/si';

const TechStack = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const techCategories = [
    {
      title: "Frontend Development",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
      ]
    },
    {
      title: "Backend Development",
      technologies: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
        { name: "Golang", icon: SiGo, color: "#00ADD8" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "Python", icon: FaPython, color: "#3776AB" }
      ]
    },
    {
      title: "Database & Tools",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-8 md:py-16" suppressHydrationWarning>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
        Tech Stack
      </h2>
      
      {/* Card-based Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
            initial={isMounted ? { opacity: 0, y: 30 } : false}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            whileHover={isMounted ? { y: -5 } : {}}
          >
            {/* Card Header */}
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold gradient-text">
                {category.title}
              </h3>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-3 gap-3">
              {category.technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center p-3 bg-slate-50/80 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-600/50 transition-colors duration-300"
                    initial={isMounted ? { opacity: 0, scale: 0.8 } : false}
                    whileInView={isMounted ? { opacity: 1, scale: 1 } : {}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={isMounted ? { scale: 1.05 } : {}}
                  >
                    <IconComponent 
                      className="text-2xl mb-1" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-slate-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;