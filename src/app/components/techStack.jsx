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
  FaLinux
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
  SiLaravel,
  SiPhp
} from 'react-icons/si';

const TechStack = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      color: "from-accent to-accent-highlight",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
      ]
    },
    {
      title: "Backend",
      color: "from-primary-secondary to-accent", 
      technologies: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
        { name: "C#", icon: SiDotnet, color: "#239120" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Python", icon: FaPython, color: "#3776AB" }
      ]
    },
    {
      title: "Database & Tools",
      color: "from-accent-highlight to-accent",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" }
      ]
    }
  ];

  // Animation variants for mobile horizontal scroll
  const marqueeVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  // Don't render animations until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <section id="skills" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
          Full Stack Technology Arsenal
        </h2>
        
        <div className="space-y-8 md:space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              {/* Category Title */}
              <div className="text-center mb-6">
                <h3 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                  {category.title}
                </h3>
              </div>

              {/* Desktop Layout - Static Grid */}
              <div className="hidden md:flex justify-center">
                <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-4xl">
                  {category.technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center p-4 glass-effect rounded-xl hover:scale-105 transition-transform duration-300"
                      >
                        <IconComponent 
                          className="text-4xl mb-2" 
                          style={{ color: tech.color }}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile/Tablet Layout - Static initially */}
              <div className="md:hidden relative overflow-hidden">
                <div className="flex space-x-6" style={{ width: `${category.technologies.length * 120}px` }}>
                  {[...category.technologies, ...category.technologies].map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={`${tech.name}-${index}`}
                        className="flex flex-col items-center justify-center min-w-[100px] p-4 glass-effect rounded-xl"
                        style={{ boxShadow: `0 4px 15px ${tech.color}15` }}
                      >
                        <IconComponent 
                          className="text-3xl mb-2" 
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs font-medium text-gray-700 dark:text-slate-300 text-center">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Fade out edges for mobile */}
                <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-light-gray-50 dark:from-dark-blue-900 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-light-gray-50 dark:from-dark-blue-900 to-transparent pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile instruction text */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-slate-400 italic">
            ✨ Technologies are dancing for you on mobile!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-8 md:py-16" suppressHydrationWarning>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
        Full Stack Technology Arsenal
      </h2>
      
      <div className="space-y-8 md:space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="relative"
            initial={isMounted ? { opacity: 0, y: 50 } : false}
            whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            {/* Category Title */}
            <div className="text-center mb-6">
              <h3 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                {category.title}
              </h3>
            </div>

            {/* Desktop Layout - Static Grid */}
            <div className="hidden md:flex justify-center">
              <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-4xl">
                {category.technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center p-4 glass-effect rounded-xl hover:scale-105 transition-transform duration-300"
                      whileHover={isMounted ? { 
                        scale: 1.1,
                        boxShadow: `0 10px 30px ${tech.color}20`
                      } : {}}
                      initial={isMounted ? { opacity: 0, scale: 0.8 } : false}
                      whileInView={isMounted ? { opacity: 1, scale: 1 } : {}}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <IconComponent 
                        className="text-4xl mb-2" 
                        style={{ color: tech.color }}
                      />
                      <span className="text-sm font-medium text-light-text-soft dark:text-text-secondary">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet Layout - Horizontal Scrolling Animation */}
            <div className="md:hidden relative overflow-hidden">
              <motion.div
                className="flex space-x-6"
                variants={marqueeVariants}
                animate={isMounted ? "animate" : false}
                style={{
                  width: `${category.technologies.length * 120}px`
                }}
              >
                {/* Duplicate the array to create seamless loop */}
                {[...category.technologies, ...category.technologies].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      className="flex flex-col items-center justify-center min-w-[100px] p-4 glass-effect rounded-xl"
                      whileHover={isMounted ? { scale: 1.05 } : {}}
                      style={{
                        boxShadow: `0 4px 15px ${tech.color}15`
                      }}
                    >
                      <IconComponent 
                        className="text-3xl mb-2" 
                        style={{ color: tech.color }}
                      />
                      <span className="text-xs font-medium text-light-text-soft dark:text-text-secondary text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {/* Fade out edges for mobile */}
              <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-light-bg dark:from-primary-bg to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-light-bg dark:from-primary-bg to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;