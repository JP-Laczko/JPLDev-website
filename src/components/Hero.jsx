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
        background: 'transparent', 
        zIndex: 0 
      }}></div>
      
      {/* Animated Background Elements with Purple/Orange/Green */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-15 animate-float" style={{ background: 'linear-gradient(to right, #facc15, #fde047)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 animate-float delay-300" style={{ background: 'linear-gradient(to right, #3b82f6, #1e40af)' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-8 animate-float delay-500" style={{ background: 'linear-gradient(to right, #facc15, #3b82f6)' }}></div>
      </div>
      
      {/* Subtle background overlay for text readability */}
      <div className="hero-dark-background" style={{
        position: 'absolute',
        top: '0px',
        left: '0',
        right: '0',
        height: '120vh',
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 4,
        borderRadius: '0 0 20px 20px'
      }}></div>

      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" style={{ zIndex: 3 }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10 }}>
        <div className="text-center min-h-screen flex flex-col justify-center">
          <div className="animate-fadeInUp">
            {/* Centered Text Layout */}
            <div className="relative mb-20" style={{ marginTop: '40px' }}>
              <h1 style={{ 
                fontWeight: 'bold', 
                lineHeight: '1.2', 
                textAlign: 'center',
                width: '100%'
              }}>
                <span className="hero-main-text" style={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 4px rgba(255,255,255,0.02)',
                  textAlign: 'center',
                  display: 'block',
                  fontSize: '60px',
                  marginBottom: '16px',
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
            
            <p style={{ 
              fontSize: '22px', 
              color: '#e2e8f0',
              fontWeight: '500', 
              marginBottom: '80px', 
              lineHeight: '1.4',
              textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              maxWidth: '900px',
              margin: '80px auto 80px auto'
            }}>
              Rather than charging hundreds of dollars per hour for full-stack development, we offer a tailored, transparent pricing model that scales with your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-24 justify-center animate-slideInUp delay-300">
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

          </div>
        </div>
        
      </div>
    </section>
  );
}