import React from 'react';
import { FaTimesCircle, FaCheckCircle, FaPuzzlePiece, FaRocket, FaCogs, FaChartLine, FaDollarSign, FaUsers, FaCode, FaServer, FaDatabase, FaMobile } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyFullStack() {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [tableRef, tableVisible] = useScrollAnimation(0.2);
  const comparisons = [
    {
      category: "Design & Customization",
      websiteBuilder: "Limited templates, cookie-cutter look",
      fullStack: "Completely custom design tailored to your brand",
      icon: FaPuzzlePiece,
      categoryColor: "from-purple-500 to-pink-500"
    },
    {
      category: "Functionality",
      websiteBuilder: "Basic features only, no custom logic",
      fullStack: "Advanced features and custom integrations",
      icon: FaCogs,
      categoryColor: "from-green-500 to-emerald-500"
    },
    {
      category: "Scalability",
      websiteBuilder: "Limited growth potential",
      fullStack: "Scalable architecture that grows with you",
      icon: FaChartLine,
      categoryColor: "from-orange-500 to-yellow-500"
    },
    {
      category: "Cost Structure",
      websiteBuilder: "Monthly fees forever, no ownership",
      fullStack: "Revenue-sharing model, you own your assets",
      icon: FaDollarSign,
      categoryColor: "from-red-500 to-rose-500"
    },
    {
      category: "User Experience",
      websiteBuilder: "Generic interface, poor conversions",
      fullStack: "Professional UX designed for results",
      icon: FaUsers,
      categoryColor: "from-indigo-500 to-purple-500"
    },
    {
      category: "Performance & SEO",
      websiteBuilder: "Slow loading, poor search rankings",
      fullStack: "Optimized for speed and search engines",
      icon: FaRocket,
      categoryColor: "from-blue-500 to-cyan-500"
    }
  ];


  return (
    <section id="why-fullstack" className="section-enhanced pt-16">
      {/* Professional Background */}
      <div className="absolute inset-0" style={{ background: '#0a0a0f' }}></div>
      
      {/* Enhanced Background Elements */}
      <div className="floating-shape top-20 right-20 w-96 h-96 bg-gradient-to-bl from-[var(--accent-gold)] to-[var(--light-gold)]"></div>
      <div className="floating-shape bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[var(--accent-blue)] to-[var(--light-blue)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div ref={headerRef} className={`text-center mb-16 px-4 ${headerVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="section-heading" style={{
            color: 'white',
            textShadow: '0 6px 12px rgba(0,0,0,0.4), 0 0 15px rgba(59, 130, 246, 0.8)',
            animation: 'shimmerGlow 2.5s ease-in-out infinite',
            wordBreak: 'break-word',
            padding: '0 10px'
          }}>
            Website Builders vs Full Stack Development
          </h2>
          <p className="section-subheading max-w-4xl mx-auto" style={{
            color: '#e2e8f0',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
          }}>
            See exactly why custom development delivers better results than template-based website builders.
          </p>
        </div>

        {/* Side-by-Side Card Comparisons */}
        <div ref={tableRef} className={`space-y-12 ${tableVisible ? "animate-scaleIn delay-200" : "opacity-0"}`}>
          {comparisons.map((comparison, index) => {
            const IconComponent = comparison.icon;
            return (
              <div key={index} className={`animate-slideInUp delay-${(index + 3) * 100}`}>
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-r ${comparison.categoryColor}`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {comparison.category}
                  </h3>
                </div>

                {/* Side-by-Side Cards */}
                <div style={{ display: 'flex', gap: '24px', maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>
                  {/* Left Card - Website Builder (Red/Negative) */}
                  <div style={{ flex: '1', position: 'relative' }}>
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '2px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '20px',
                      padding: '24px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      minHeight: '240px'
                    }}>
                      {/* Header */}
                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          color: 'white', 
                          marginBottom: '4px',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}>
                          Website Builders
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaPuzzlePiece style={{ color: '#fca5a5', marginRight: '6px', fontSize: '12px' }} />
                          <span style={{ color: '#fca5a5', fontSize: '13px', fontWeight: '500' }}>Template-Based</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div style={{
                        background: 'rgba(127, 29, 29, 0.3)',
                        borderRadius: '12px',
                        padding: '18px',
                        border: '1px solid rgba(239, 68, 68, 0.2)'
                      }}>
                        <p style={{
                          color: 'white',
                          fontSize: '16px',
                          lineHeight: '1.5',
                          fontWeight: '500',
                          textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                          margin: '0',
                          textAlign: 'center'
                        }}>
                          {comparison.websiteBuilder}
                        </p>
                      </div>
                      
                      {/* Negative indicator */}
                      <div style={{
                        position: 'absolute',
                        top: '-16px',
                        left: '-16px',
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        ❌ Limited
                      </div>
                    </div>
                  </div>

                  {/* Right Card - Full Stack (Green/Positive) */}
                  <div style={{ flex: '1', position: 'relative' }}>
                    <div style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '2px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '20px',
                      padding: '24px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      minHeight: '240px'
                    }}>
                      {/* Header */}
                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h4 style={{ 
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          color: 'white', 
                          marginBottom: '4px',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}>
                          Full Stack Development
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaServer style={{ color: '#86efac', marginRight: '6px', fontSize: '12px' }} />
                          <span style={{ color: '#86efac', fontSize: '13px', fontWeight: '500' }}>Custom-Built</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div style={{
                        background: 'rgba(20, 83, 45, 0.3)',
                        borderRadius: '12px',
                        padding: '18px',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                      }}>
                        <p style={{
                          color: 'white',
                          fontSize: '16px',
                          lineHeight: '1.5',
                          fontWeight: '500',
                          textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                          margin: '0',
                          textAlign: 'center'
                        }}>
                          {comparison.fullStack}
                        </p>
                      </div>
                      
                      {/* Success indicator */}
                      <div style={{
                        position: 'absolute',
                        top: '-16px',
                        left: '-16px',
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)'
                      }}>
                        ✅ Superior
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}