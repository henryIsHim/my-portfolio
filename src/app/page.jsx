import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-32 gap-8">
        {/* Left side - Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white-900 mb-4">
            Hey, I'm Henry 👋
          </h1>
          <p className="text-lg text-white-600 max-w-xl mb-6">
            A passionate ICT student and aspiring full-stack developer based in Thailand. 
            I love building clean, user-focused web experiences and exploring how tech can solve real problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/henry-resume.pdf"
              download
              className="bg-blue-600 text-white border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586L7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side - Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/profile.jpg"
              alt="Henry's profile picture"
              fill
              className="rounded-full object-cover border-4 border-blue-600 shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
