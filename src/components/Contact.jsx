import { FaEnvelope, FaPhone, FaSms, FaLinkedin, FaGithub } from 'react-icons/fa';
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
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] bg-clip-text text-transparent">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with a developer who's invested in your success? 
            Shoot me a text or email to discuss your project!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {/* Main Contact Cards */}
            <div ref={cardsRef} className={`grid md:grid-cols-2 gap-8 mb-12 ${cardsVisible ? "" : "opacity-0"}`}>
              {/* Email Card */}
              <div className={`relative overflow-hidden group ${cardsVisible ? "animate-slideInLeft delay-200" : ""}`}>
                {/* Enhanced Background with Purple/Orange Gradients */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, #ca8a04, #ea580c, #7c3aed)' }}></div>
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.6), rgba(0, 0, 0, 0.3), rgba(124, 58, 237, 0.6))' }}></div>
                
                <div className="relative card border-4" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--light-gold)] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-black mb-4" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Email Me</h3>
                    <a 
                      href="mailto:jplaczkovichdev@gmail.com"
                      className="text-[var(--accent-gold)] text-2xl font-black hover:text-[var(--light-gold)] transition-colors block mb-4"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                    >
                      jplaczkovichdev@gmail.com
                    </a>
                    <p className="text-lg font-semibold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                      Send me an email with your project details and I'll get back to you within 48 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Card */}
              <div className={`relative overflow-hidden group ${cardsVisible ? "animate-slideInRight delay-200" : ""}`}>
                {/* Enhanced Background with Green/Purple Gradients */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, #16a34a, #059669, #7c3aed)' }}></div>
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, rgba(5, 150, 105, 0.6), rgba(0, 0, 0, 0.3), rgba(124, 58, 237, 0.6))' }}></div>
                
                <div className="relative card border-4" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--light-blue)] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <FaSms className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-black mb-4" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Text Me</h3>
                    <a 
                      href="sms:703-936-1602"
                      className="text-[var(--accent-gold)] text-2xl font-black hover:text-[var(--light-gold)] transition-colors block mb-4"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                    >
                      (703) 936-1602
                    </a>
                    <p className="text-lg font-semibold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                      Shoot me a text to discuss your project ideas and timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="text-center animate-scaleIn delay-400 mt-16">
              <div className="relative overflow-hidden">
                {/* Multi-layer Background Effects with Purple/Orange/Green */}
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, #ca8a04, #ea580c, #7c3aed)' }}></div>
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(234, 88, 12, 0.4), rgba(124, 58, 237, 0.5), rgba(22, 163, 74, 0.4))' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-3xl"></div>
                
                <div className="relative card p-8 border-4 border-[var(--accent-gold)]/50">
                  <h3 className="text-4xl font-black mb-8" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Prefer Quick Links?</h3>
                  <div className="flex justify-center gap-8">
                    <a 
                      href="sms:703-936-1602"
                      className="btn-primary flex items-center group text-xl px-10 py-6 font-black"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
                    >
                      <FaSms className="mr-3 group-hover:animate-pulse text-2xl" />
                      Send Text
                    </a>
                    <a 
                      href="mailto:jplaczkovichdev@gmail.com"
                      className="btn-secondary flex items-center group text-xl px-10 py-6 font-black"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
                    >
                      <FaEnvelope className="mr-3 group-hover:animate-pulse text-2xl" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center mt-16 animate-fadeInUp delay-500 mb-20">
              <h4 className="text-2xl font-semibold mb-8" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Connect With Me</h4>
              <div className="flex justify-center space-x-8">
                <a 
                  href="#" 
                  className="w-16 h-16 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{ background: 'linear-gradient(to bottom right, #ca8a04, #ea580c)' }}
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a 
                  href="#" 
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