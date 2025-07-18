import { FaArrowRight, FaCode, FaRocket, FaDollarSign } from 'react-icons/fa';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Advanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] via-[var(--secondary-blue)] to-[var(--accent-blue)]"></div>
      
      {/* Animated Background Elements with Purple/Orange/Green */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-15 animate-float" style={{ background: 'linear-gradient(to right, #ca8a04, #ea580c)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 animate-float delay-300" style={{ background: 'linear-gradient(to right, #16a34a, #7c3aed)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-8 animate-pulse" style={{ background: 'linear-gradient(to right, #7c3aed, #ea580c, #16a34a)' }}></div>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp text-center lg:text-left">
            <h1 className="text-white font-bold leading-tight" style={{ marginBottom: '48px' }}>
              <span className="block text-3xl lg:text-4xl xl:text-5xl" style={{ background: 'linear-gradient(45deg, #1e40af, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: '#1e40af', fontWeight: 'bold', marginBottom: '16px' }}>We build real, powerful, custom applications</span>
              <span className="block font-normal" style={{ fontSize: '22px', color: '#64748b', paddingTop: '16px' }}>— not the kind you get from AI or web builders.</span>
            </h1>
            
            <p style={{ fontSize: '24px', color: '#374151', fontWeight: '500', marginBottom: '40px', lineHeight: '1.5' }}>
              JPLDev takes the stress out of managing everything — so you can focus on growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideInLeft delay-300">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center group"
              >
                View Portfolio
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-secondary"
              >
                Start Your Project
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center animate-scaleIn delay-400">
              <div className="card flex flex-col items-center text-center p-6 delay-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--light-gold)] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <FaDollarSign className="text-white text-2xl" />
                </div>
                <span className="text-sm font-semibold text-white">Lower Upfront Cost</span>
              </div>
              <div className="card flex flex-col items-center text-center p-6 delay-200">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--light-blue)] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <FaCode className="text-white text-2xl" />
                </div>
                <span className="text-sm font-semibold text-white">Custom Full Stack</span>
              </div>
              <div className="card flex flex-col items-center text-center p-6 delay-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--secondary-blue)] to-[var(--accent-blue)] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <span className="text-sm font-semibold text-white">Revenue Partnership</span>
              </div>
            </div>
          </div>
          
          <div className="lg:flex justify-center hidden animate-slideInRight delay-200">
            <div className="relative">
              {/* Enhanced Background Effects */}
              <div className="absolute -inset-8">
                <div className="w-full h-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] rounded-full opacity-20 blur-2xl animate-pulse"></div>
              </div>
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-gradient-to-r from-[var(--secondary-blue)] to-[var(--accent-blue)] rounded-full opacity-30 blur-xl animate-float"></div>
              </div>
              
              {/* Professional Profile Container */}
              <div className="relative z-10">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5">
                  <img 
                    src="/profile.jpg"
                    alt="JPLDev Professional Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Professional Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] text-[var(--dark-bg)] px-6 py-3 rounded-2xl font-bold text-lg shadow-xl border border-white/20 backdrop-blur-sm">
                    Full Stack Developer
                  </div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--light-gold)]/30 rounded-full backdrop-blur-sm animate-float delay-500"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[var(--light-blue)]/20 to-[var(--very-light-blue)]/20 rounded-full backdrop-blur-sm animate-float delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}