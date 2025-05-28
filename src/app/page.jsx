import Image from 'next/image';
import ProjectCard from './components/projectCard';
import { projects } from './data/projects';
import Separator from './components/separator';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 overflow-hidden">
      {/* Hero Section */}
      <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-between py-8 md:py-32 gap-8">
        {/* Left side - Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hey, I'm Henry 👋
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6">
            A passionate ICT student and aspiring full-stack developer based in Thailand.
            I love building clean, user-focused web experiences and exploring how tech can solve real problems.
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6">
            I'm a student at Rangsit University, where I'm pursuing a degree in Information and Communication Technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/henry-resume.pdf"
              download
              className="bg-blue-600 text-white border-2 border-transparent px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586L7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
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
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Let's Connect</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-md mx-auto px-4">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {/* Email Card */}
          <a
            href="mailto:winheinthuya.dev@gmail.com"
            className="group flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-sm text-gray-600 text-center group-hover:text-blue-600 transition-colors duration-300">winheinthuya.dev@gmail.com</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/hein-thuya-win-b54932363"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="font-medium mb-1">LinkedIn</h3>
            <p className="text-sm text-gray-600 text-center group-hover:text-blue-600 transition-colors duration-300">Connect with me</p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/henryIsHim"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="font-medium mb-1">GitHub</h3>
            <p className="text-sm text-gray-600 text-center group-hover:text-blue-600 transition-colors duration-300">Check out my code</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">Based in Thailand 🇹🇭</p>
          <p className="text-sm text-gray-500 mt-2">Open to remote opportunities worldwide</p>
        </div>
      </section>

    </main>
  );
}
