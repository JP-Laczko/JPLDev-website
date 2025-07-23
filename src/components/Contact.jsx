import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.2);
  const [quickLinksRef, quickLinksVisible] = useScrollAnimation(0.3);
  const [socialRef, socialVisible] = useScrollAnimation(0.3);
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Professional Background with Purple/Orange/Green */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #0f172a, #2563eb, #7c3aed)' }}></div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top left, rgba(234, 88, 12, 0.2), transparent, rgba(22, 163, 74, 0.2))' }}></div>
      
      {/* Animated Background Elements with Purple/Orange/Green */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'linear-gradient(to right, rgba(202, 138, 4, 0.3), rgba(234, 88, 12, 0.3))' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float delay-300" style={{ background: 'linear-gradient(to right, rgba(22, 163, 74, 0.3), rgba(124, 58, 237, 0.3))' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-2xl animate-float delay-500" style={{ background: 'linear-gradient(to right, rgba(124, 58, 237, 0.4), rgba(234, 88, 12, 0.4))' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold mb-6" style={{
            color: 'white',
            textShadow: '0 6px 12px rgba(0,0,0,0.4), 0 0 15px rgba(59, 130, 246, 0.8)',
            animation: 'shimmerGlow 2.5s ease-in-out infinite'
          }}>
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed px-8 sm:px-12 lg:px-16" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Ready to partner with a developer who's invested in your success? 
            Send us an email to discuss your project!
          </p>
          
          {/* Decorative Header Line */}
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] rounded-full mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {/* Main Contact Card */}
            <div ref={cardsRef} className={`flex justify-center ${cardsVisible ? "" : "opacity-0"}`}>
              {/* Email Card */}
              <div className={`max-w-2xl w-full relative overflow-hidden group ${cardsVisible ? "animate-slideInUp delay-200" : ""}`}>
                {/* Enhanced Background with Purple/Orange Gradients */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, #ca8a04, #ea580c, #7c3aed)' }}></div>
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.6), rgba(0, 0, 0, 0.3), rgba(124, 58, 237, 0.6))' }}></div>
                
                <div className="relative card border-4" style={{ borderColor: 'rgba(255, 255, 255, 0.5)', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))', backdropFilter: 'blur(10px)' }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--light-gold)] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-black mb-4" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Email Us</h3>
                    <a 
                      href="mailto:jp.jpldev@gmail.com"
                      className="text-[var(--accent-gold)] text-2xl font-black hover:text-[var(--light-gold)] transition-colors block mb-4"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                    >
                      jp.jpldev@gmail.com
                    </a>
                    <p className="text-lg font-semibold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                      Send us an email with your project details and we'll get back to you within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="text-center animate-scaleIn delay-400" style={{ marginBottom: '40px' }}>
              <div className="relative overflow-hidden">
                {/* Multi-layer Background Effects with Purple/Orange/Green */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, #ca8a04, #ea580c, #7c3aed)' }}></div>
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(234, 88, 12, 0.4), rgba(124, 58, 237, 0.5), rgba(22, 163, 74, 0.4))' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-3xl"></div>
                
                <div className="relative card p-8 border-4 border-[var(--accent-gold)]/50" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(59, 130, 246, 0.9))', backdropFilter: 'blur(10px)' }}>
                  <h3 className="text-4xl font-black mb-8" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Ready to Get Started?</h3>
                  <div className="flex justify-center">
                    <a 
                      href="mailto:jp.jpldev@gmail.com"
                      className="btn-primary flex items-center group text-xl px-12 py-6 font-black"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
                    >
                      <FaEnvelope className="mr-3 group-hover:animate-pulse text-2xl" />
                      Send Email Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center mt-16 animate-fadeInUp delay-500 mb-20">
              <h4 className="text-2xl font-semibold mb-8" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Connect With Us</h4>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/jp-laczkovich/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #ca8a04, #ea580c)' }}
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/jpldev-llc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #3b82f6, #1e40af)' }}
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a 
                  href="https://github.com/JP-Laczko" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #16a34a, #7c3aed)' }}
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}