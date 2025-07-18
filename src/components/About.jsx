import { FaUser, FaHandshake, FaChartLine, FaTools } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [leftSideRef, leftSideVisible] = useScrollAnimation(0.2);
  const [rightSideRef, rightSideVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.2);
  return (
    <section id="about" className="section-enhanced" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      {/* POWERFUL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] via-[var(--secondary-blue)] to-[var(--accent-blue)]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-gold)]/20 via-transparent to-[var(--light-gold)]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
      
      {/* Enhanced Background Elements */}
      <div className="floating-shape top-20 right-20 w-96 h-96 bg-gradient-to-bl from-[var(--accent-gold)] to-[var(--light-gold)] opacity-30"></div>
      <div className="floating-shape bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[var(--accent-blue)] to-[var(--light-blue)] opacity-30"></div>
      <div className="floating-shape top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--secondary-blue)] to-[var(--accent-blue)] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div ref={rightSideRef} className={rightSideVisible ? "animate-fadeInUp" : "opacity-0"}>
            <h2 className="section-heading text-white text-center mb-12">
              About <span className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] bg-clip-text text-transparent">JPLDev</span>
            </h2>
            
            <div className="flex flex-col items-center justify-center gap-8 mb-8 px-12">
              {/* Profile Picture */}
              <div className="flex-shrink-0" style={{ width: '150px', height: '150px' }}>
                <img 
                  src="/profile.jpg"
                  alt="JP Laczkovich - JPLDev Founder"
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    border: '4px solid rgba(255, 255, 255, 0.2)'
                  }}
                />
              </div>
              
              {/* Text Content */}
              <div className="text-center">
                <p className="text-3xl font-bold text-white animate-fadeInUp delay-200 mb-2">
                  Hi, I'm JP Laczkovich, founder of JPLDev.
                </p>
              </div>
            </div>
            
            {/* Mission Statement Card */}
            <div className="relative overflow-hidden mb-12 animate-fadeInUp delay-300 text-center transform hover:scale-105 transition-all duration-500">
              <div 
                className="rounded-3xl shadow-2xl border-4"
                style={{
                  background: 'linear-gradient(to right, #ca8a04, #ea580c, #d97706)',
                  borderColor: '#facc15',
                  padding: '3rem'
                }}
              >
                <h3 className="text-4xl font-black mb-6 flex items-center justify-center" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  <span className="w-4 h-4 bg-white rounded-full mr-4 animate-pulse"></span>
                  My Mission
                  <span className="w-4 h-4 bg-white rounded-full ml-4 animate-pulse"></span>
                </h3>
                <p className="text-2xl leading-relaxed font-bold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  I started this company with one mission: to give businesses of all sizes access to <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>powerful and professional full-stack web development</span> — without the massive upfront cost.
                </p>
              </div>
            </div>
            
            {/* Value Proposition Card */}
            <div className="relative overflow-hidden mb-12 animate-fadeInUp delay-400 text-center transform hover:scale-105 transition-all duration-500">
              <div 
                className="rounded-3xl shadow-2xl border-4"
                style={{
                  background: 'linear-gradient(to right, #2563eb, #4f46e5, #7c3aed)',
                  borderColor: '#60a5fa',
                  padding: '3rem'
                }}
              >
                <h3 className="text-4xl font-black mb-6 flex items-center justify-center" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  <span className="w-4 h-4 bg-white rounded-full mr-4 animate-pulse"></span>
                  What Makes a Great Website
                  <span className="w-4 h-4 bg-white rounded-full ml-4 animate-pulse"></span>
                </h3>
                <p className="text-2xl leading-relaxed font-bold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  A great website shouldn't just look good — <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>it should work for you</span>. It should automate your processes, convert visitors into customers, and free up your time so you can focus on running and growing your business. <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>That's where I come in.</span>
                </p>
              </div>
            </div>
            
            {/* Revenue Model Card - MOST IMPORTANT */}
            <div className="relative overflow-hidden mb-12 animate-fadeInUp delay-500 text-center transform hover:scale-105 transition-all duration-500">
              <div 
                className="rounded-3xl shadow-2xl border-4 animate-pulse"
                style={{
                  background: 'linear-gradient(to right, #16a34a, #059669, #0d9488)',
                  borderColor: '#4ade80',
                  padding: '4rem'
                }}
              >
                <h3 className="text-5xl font-black mb-8 flex items-center justify-center" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  <span className="w-5 h-5 bg-white rounded-full mr-4 animate-pulse"></span>
                  💰 Revenue-Sharing Model 💰
                  <span className="w-5 h-5 bg-white rounded-full ml-4 animate-pulse"></span>
                </h3>
                <p className="text-3xl leading-relaxed font-bold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  Instead of charging thousands before you see results, I offer a <span className="font-black text-4xl" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>revenue-sharing model</span>. I build and maintain a custom, results-driven web platform tailored to your business — and <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>I only succeed when you do</span>. No bloated budgets. No barriers to entry. Just scalable, smart software that grows with you.
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center animate-fadeInUp delay-600">
              <div 
                className="rounded-3xl shadow-2xl border-4 animate-pulse inline-block transform hover:scale-105 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to right, #ca8a04, #ea580c, #ca8a04)',
                  borderColor: '#facc15',
                  padding: '2rem 3rem'
                }}
              >
                <p className="text-5xl font-black leading-relaxed" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  🚀 Let's build something that <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>pays for itself</span> — and then some more! 🚀
                </p>
              </div>
            </div>

            <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 ${cardsVisible ? "" : "opacity-0"}`}>
              <div className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${cardsVisible ? "animate-bounceIn delay-400" : ""}`}>
                {/* Enhanced Background with Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-400/15 to-purple-500/10 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"></div>
                
                <div className="relative card text-center p-8 border-3 border-gray-200/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-transform duration-300">
                    <FaHandshake className="text-white text-3xl" />
                  </div>
                  <h3 className="font-bold text-[var(--dark-bg)] mb-3 text-xl">Partnership Model</h3>
                  <p className="text-base text-[var(--medium-gray)] leading-relaxed">We succeed together</p>
                </div>
              </div>
              
              <div className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${cardsVisible ? "animate-bounceIn delay-500" : ""}`}>
                {/* Enhanced Background with Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-amber-400/15 to-orange-400/10 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"></div>
                
                <div className="relative card text-center p-8 border-3 border-gray-200/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--light-gold)] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-transform duration-300">
                    <FaChartLine className="text-white text-3xl" />
                  </div>
                  <h3 className="font-bold text-[var(--dark-bg)] mb-3 text-xl">Growth Focused</h3>
                  <p className="text-base text-[var(--medium-gray)] leading-relaxed">Built for performance</p>
                </div>
              </div>
              
              <div className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${cardsVisible ? "animate-bounceIn delay-600" : ""}`}>
                {/* Enhanced Background with Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/15 to-indigo-400/10 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl"></div>
                
                <div className="relative card text-center p-8 border-3 border-gray-200/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--light-blue)] rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-transform duration-300">
                    <FaTools className="text-white text-3xl" />
                  </div>
                  <h3 className="font-bold text-[var(--dark-bg)] mb-3 text-xl">Full Stack</h3>
                  <p className="text-base text-[var(--medium-gray)] leading-relaxed">Complete solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}