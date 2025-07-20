import React from 'react';
import { FaCogs, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyChooseJPLDev() {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.2);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.3);
  const whyChooseMe = [
    {
      icon: <FaCogs className="text-4xl text-accent-gold" />,
      title: "Full Stack Expertise",
      description: "I handle everything from frontend user experience to backend databases and server management."
    },
    {
      icon: <FaRocket className="text-4xl text-accent-gold" />,
      title: "Performance Focused",
      description: "Every site I build is optimized for speed, SEO, and conversions to maximize your revenue."
    },
    {
      icon: <FaHandshake className="text-4xl text-accent-gold" />,
      title: "Aligned Incentives",
      description: "My revenue-sharing model means I'm invested in your long-term success, not just project completion."
    },
    {
      icon: <FaChartLine className="text-4xl text-accent-gold" />,
      title: "Growth Partnership",
      description: "I provide ongoing optimization and support because your growth directly impacts my success."
    }
  ];

  return (
    <section id="why-choose-jpldev" className="section-enhanced pt-16">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] via-[var(--secondary-blue)] to-[var(--accent-blue)]"></div>
      
      {/* Enhanced Background Elements with Purple/Orange/Green */}
      <div className="floating-shape top-20 left-10 w-96 h-96 blur-3xl" style={{ background: 'linear-gradient(to right, #ca8a04, #ea580c)' }}></div>
      <div className="floating-shape bottom-20 right-10 w-80 h-80 blur-3xl" style={{ background: 'linear-gradient(to right, #16a34a, #7c3aed)' }}></div>
      <div className="floating-shape top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-3xl" style={{ background: 'linear-gradient(to right, #7c3aed, #ea580c, #16a34a)' }}></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-20 ${headerVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="section-heading bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] bg-clip-text text-transparent" style={{
            textShadow: '0 6px 12px rgba(0,0,0,0.4), 0 0 15px rgba(100, 150, 255, 0.08)',
            animation: 'shimmerGlow 2.5s ease-in-out infinite',
            WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.6)'
          }}>
            Why Choose JPLDev
          </h2>
          <p className="section-subheading text-gray-300 max-w-4xl mx-auto" style={{ padding: '0 20px' }}>
            You could hire any developer, but here's what makes JPLDev different and why 
            businesses choose to partner with me for their web development needs.
          </p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${cardsVisible ? "animate-scaleIn delay-200" : "opacity-0"}`}>
          {whyChooseMe.map((item, index) => {
            const cardColors = [
              { bg: 'linear-gradient(to bottom right, #ca8a04, #ea580c, #7c3aed)', icon: 'linear-gradient(to bottom right, #ca8a04, #ea580c)' },
              { bg: 'linear-gradient(to bottom right, #7c3aed, #16a34a, #ca8a04)', icon: 'linear-gradient(to bottom right, #7c3aed, #16a34a)' },
              { bg: 'linear-gradient(to bottom right, #16a34a, #ca8a04, #7c3aed)', icon: 'linear-gradient(to bottom right, #16a34a, #ca8a04)' },
              { bg: 'linear-gradient(to bottom right, #ea580c, #7c3aed, #16a34a)', icon: 'linear-gradient(to bottom right, #ea580c, #7c3aed)' }
            ];
            const cardColor = cardColors[index % cardColors.length];
            return (
            <div key={index} className={`relative overflow-hidden group delay-${(index + 1) * 100}`}>
              {/* Enhanced Background with Purple/Orange/Green Gradients */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: cardColor.bg }}></div>
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.4), rgba(255, 255, 255, 0.3), rgba(124, 58, 237, 0.4))' }}></div>
              
              <div className="relative card text-center border-3 border-white/20">
                <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: cardColor.icon }}>
                  {React.cloneElement(item.icon, { className: "text-white text-2xl" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
            );
          })}
        </div>

        <div ref={ctaRef} className={`text-center mt-12 ${ctaVisible ? "animate-fadeInUp delay-400" : "opacity-0"}`}>
          <div className="relative overflow-hidden">
            {/* Multi-layer Background Effects with Purple/Orange/Green */}
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, #ca8a04, #ea580c, #7c3aed)' }}></div>
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(234, 88, 12, 0.3), rgba(124, 58, 237, 0.4), rgba(22, 163, 74, 0.3))' }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/5 rounded-3xl"></div>
            
            <div className="relative card p-8 border-4 border-white/30">
              <h3 className="text-4xl font-bold text-[var(--dark-bg)] mb-4">Ready to Partner with JPLDev?</h3>
              <p className="text-xl text-[var(--dark-bg)]/80 mb-8 leading-relaxed">
                Let's build something that drives real revenue for your business.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-white px-16 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6, #1e40af, #1e3a8a)',
                  color: 'white'
                }}
              >
                Start Your Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}