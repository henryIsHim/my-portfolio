"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl, status } = project;
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="group relative glass-effect rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    >

      {/* Project Image */}
      <div className="relative h-40 sm:h-48 w-full">
        {imgError ? (
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-sm font-medium">{title}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}

        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-800/90 text-zinc-200 rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
              title="Live Demo"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-800/90 text-zinc-200 rounded-full hover:bg-white hover:text-zinc-900 transition-colors"
              title="View Code"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
          {status && (
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full border shrink-0 ${
              status === 'Complete'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-transparent'
                : 'border-zinc-400 dark:border-zinc-500 text-zinc-600 dark:text-zinc-400'
            }`}>
              {status}
            </span>
          )}
        </div>
        <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-200 mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 bg-zinc-200/50 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-200 rounded-full text-xs font-medium border border-zinc-400/30 dark:border-zinc-600/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
