import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-[var(--dark-bg)]/95 via-[var(--primary-blue)]/95 to-[var(--dark-bg)]/95 backdrop-blur-lg border-b border-[var(--accent-gold)]/20 shadow-2xl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-2 left-1/4 w-32 h-32 bg-gradient-to-r from-[var(--accent-gold)]/10 to-[var(--light-gold)]/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -top-2 right-1/4 w-24 h-24 bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--light-blue)]/10 rounded-full blur-2xl animate-float delay-300"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] bg-clip-text text-transparent drop-shadow-lg">JPL</span>
              <span className="text-white drop-shadow-lg">Dev</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection('home')} 
                className="px-4 py-2 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-4 py-2 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-jpldev')} 
                className="px-4 py-2 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Why JPLDev
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="px-4 py-2 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('why-fullstack')} 
                className="px-4 py-2 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Full Stack vs Builders
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="ml-4 px-6 py-2 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] text-[var(--dark-bg)] font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl bg-[var(--accent-gold)]/20 text-white hover:bg-[var(--accent-gold)]/30 transition-all duration-300 backdrop-blur-sm"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-b from-[var(--dark-bg)]/95 to-[var(--primary-blue)]/95 backdrop-blur-lg border-t border-[var(--accent-gold)]/20">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300">About</button>
            <button onClick={() => scrollToSection('why-choose-jpldev')} className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300">Why JPLDev</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300">Portfolio</button>
            <button onClick={() => scrollToSection('why-fullstack')} className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-[var(--accent-gold)]/20 transition-all duration-300">Full Stack vs Builders</button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] text-[var(--dark-bg)] block px-4 py-3 text-base font-bold w-full text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-4">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}