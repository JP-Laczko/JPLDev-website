import { FaArrowRight, FaCode, FaRocket, FaDollarSign } from 'react-icons/fa';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Advanced Background Gradient */}
      <div className="absolute" style={{ 
        top: 0,
        left: 0,
        right: 0,
        bottom: '-200px',
        background: 'white', 
        zIndex: 0 
      }}></div>
      
      {/* Animated Background Elements with Purple/Orange/Green */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-15 animate-float" style={{ background: 'linear-gradient(to right, #facc15, #fde047)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 animate-float delay-300" style={{ background: 'linear-gradient(to right, #3b82f6, #1e40af)' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-8 animate-float delay-500" style={{ background: 'linear-gradient(to right, #facc15, #3b82f6)' }}></div>
      </div>
      
      {/* Dark background for title area */}
      <div className="hero-dark-background" style={{
        position: 'absolute',
        top: '0px',
        left: '0',
        right: '0',
        height: '120vh',
        background: 'rgba(15, 23, 42, 0.9)',
        zIndex: 4,
        borderRadius: '0 0 20px 20px'
      }}></div>

      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" style={{ zIndex: 3 }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10 }}>
        <div className="text-center">
          <div className="animate-fadeInUp">
            {/* Split layout: Logo left third, Text right two-thirds - Mobile Optimized */}
            <div className="relative mb-12 hero-title-grid" style={{ 
              marginTop: '40px', 
              display: 'grid', 
              gridTemplateColumns: '1fr 2fr', 
              gap: '30px', 
              alignItems: 'center', 
              width: '100%' 
            }}>
              {/* Logo Section */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                  src="/JPLDevfavicon.png"
                  alt="JPLDev Logo"
                  className="hero-logo"
                  style={{
                    width: '180px',
                    height: '180px',
                    objectFit: 'contain',
                    opacity: 1,
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
              
              {/* Text Section */}
              <div className="hero-text-container" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-end', 
                alignItems: 'flex-start', 
                paddingLeft: '0px', 
                paddingRight: '100px', 
                paddingBottom: '90px' 
              }}>
                <h1 style={{ fontWeight: 'bold', lineHeight: '1.2', marginTop: '100px', marginLeft: '-100px' }}>
                  <span className="hero-main-text" style={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 4px rgba(255,255,255,0.02)',
                    textAlign: 'center',
                    display: 'block',
                    fontSize: '60px',
                    marginBottom: '16px',
                    marginTop: '15px',
                    filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.08))'
                  }}>
                    We build <span style={{ 
                      background: 'linear-gradient(135deg, #f59e0b, #d97706, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold',
                      filter: 'drop-shadow(0 0 12px rgba(245, 158, 11, 0.6)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))',
                      animation: 'pulse 2s ease-in-out infinite alternate',
                      WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'
                    }}>real</span>, <span style={{ 
                      background: 'linear-gradient(135deg, #3b82f6, #1e40af, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold',
                      filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))',
                      animation: 'pulse 2s ease-in-out infinite alternate 0.5s',
                      WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'
                    }}>powerful</span>, <span style={{ 
                      background: 'linear-gradient(135deg, #059669, #047857, #059669)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold',
                      filter: 'drop-shadow(0 0 12px rgba(5, 150, 105, 0.6)) drop-shadow(0 0 20px rgba(5, 150, 105, 0.4))',
                      animation: 'pulse 2s ease-in-out infinite alternate 1s',
                      WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)'
                    }}>custom</span> applications
                  </span>
                  <span className="hero-subtitle" style={{ 
                    color: '#94a3b8', 
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    textAlign: 'center',
                    display: 'block',
                    fontSize: '24px',
                    fontWeight: 'normal'
                  }}>
                    — not the kind you get from AI or web builders.
                  </span>
                </h1>
              </div>
            </div>
            
            <p style={{ 
              fontSize: '22px', 
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #b45309)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '500', 
              marginBottom: '48px', 
              lineHeight: '1.4',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              maxWidth: '900px',
              margin: '60px auto 48px auto'
            }}>
              Rather than charging hundreds of dollars per hour for full-stack development, we offer a tailored, transparent pricing model that scales with your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center animate-slideInUp delay-300">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center group text-xl px-10 py-4"
                style={{
                  background: '#f59e0b',
                  color: 'white',
                  fontWeight: 'bold',
                  textShadow: 'none',
                  boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)'
                }}
              >
                View Portfolio
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-secondary text-xl px-10 py-4"
                style={{
                  background: 'transparent',
                  border: '3px solid #f59e0b',
                  color: '#f59e0b',
                  fontWeight: 'bold'
                }}
              >
                Start Your Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-scaleIn delay-400">
              <div className="card flex flex-col items-center text-center p-8 delay-100" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid white'
              }}>
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--light-gold)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaDollarSign className="text-white text-3xl" />
                </div>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Lower Upfront Cost</span>
              </div>
              <div className="card flex flex-col items-center text-center p-8 delay-200" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid white'
              }}>
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--light-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaCode className="text-white text-3xl" />
                </div>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Custom Full Stack</span>
              </div>
              <div className="card flex flex-col items-center text-center p-8 delay-300" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid white'
              }}>
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--secondary-blue)] to-[var(--accent-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <FaRocket className="text-white text-3xl" />
                </div>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Revenue Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}