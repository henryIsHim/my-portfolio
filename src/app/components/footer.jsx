import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-blue-600">Henry</span>
              <span className="text-gray-900">Dev</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Building digital experiences with passion and purpose
            </p>
            <p className="text-sm text-gray-500">
              Based in Thailand 🇹🇭
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a>
              <a 
                href="/henry-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 font-semibold mb-4">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:winheinthuya.dev@gmail.com"
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/heinthuyawin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/henryIsHim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Hein Thuya Win. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
