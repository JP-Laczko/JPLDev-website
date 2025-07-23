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
            <h2 className="section-heading text-center mb-12" style={{
              color: 'white',
              textShadow: '0 6px 12px rgba(0,0,0,0.4), 0 0 15px rgba(59, 130, 246, 0.8)',
              animation: 'shimmerGlow 2.5s ease-in-out infinite'
            }}>
              About JPLDev
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
                  Hi, I'm JP Laczkovich, the President of JPLDev.
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
                  Our Mission
                  <span className="w-4 h-4 bg-white rounded-full ml-4 animate-pulse"></span>
                </h3>
                <p className="text-2xl leading-relaxed font-bold" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  We started this company with one mission: to give businesses of all sizes access to <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>powerful and professional full-stack web development</span> — without the massive upfront cost.
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
                  A great website shouldn't just look good — <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>it should work for you</span>. It should automate your processes, convert visitors into customers, and free up your time so you can focus on running and growing your business. <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>That's where we come in.</span>
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
                  Instead of charging thousands before you see results, we offer a <span className="font-black text-4xl" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>revenue-sharing model</span>. We build and maintain a custom, results-driven web platform tailored to your business — and <span className="font-black" style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>we only succeed when you do</span>. No bloated budgets. No barriers to entry. Just scalable, smart software that grows with you.
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

          </div>
        </div>
      </div>
    </section>
  );
}