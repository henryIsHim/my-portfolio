import Image from 'next/image';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl, status } = project;

  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      {/* Status Badge */}
      {status && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            status === 'Complete' 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {status}
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay with buttons on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            title="Live Demo"
          >
            <FiExternalLink className="w-5 h-5" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            title="View Code"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 