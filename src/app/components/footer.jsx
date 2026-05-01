import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-sans mb-4">
              <span className="text-zinc-950 dark:text-white font-bold">Henry</span>
              <span className="text-zinc-400 dark:text-zinc-500 font-light">Dev</span>
            </h2>
            <p className="text-zinc-700 dark:text-zinc-200 mb-4">
              Building digital experiences with passion and purpose
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Based in Thailand <span aria-label="Thailand flag">🇹🇭</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-zinc-900 dark:text-zinc-50 font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300">About</a>
              <a href="#skills" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300">Contact</a>
              <a 
                href="/henry-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-zinc-900 dark:text-zinc-50 font-semibold mb-4">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:winheinthuya.dev@gmail.com"
                className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/heinthuyawin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/henryIsHim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/66967515701"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-700 dark:text-zinc-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Hein Thuya Win. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
