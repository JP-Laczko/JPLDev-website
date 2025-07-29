import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-accent-gold">JPL</span>Dev
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-stack software development with a revenue-sharing model that aligns 
              our success with yours. Let's build something profitable together.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jp-laczkovich/" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-yellow-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://github.com/JP-Laczko" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-yellow-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="mailto:contact@jpldev.com" className="text-accent-gold hover:text-yellow-400 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-fullstack')} 
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Why Full Stack
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-accent-gold" />
                <span>contact@jpldev.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaPhone className="mr-3 text-accent-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="mt-6 flex items-center text-accent-gold hover:text-yellow-400 transition-colors"
            >
              Back to Top <FaArrowUp className="ml-2" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} JPLDev. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}