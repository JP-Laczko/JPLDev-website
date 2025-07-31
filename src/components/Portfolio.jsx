import { FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portfolio() {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.2);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.3);
  const projects = [
    {
      id: 1,
      title: "DCD Labor",
      description: "A professional labor services website showcasing company capabilities and services. Features modern design and comprehensive service presentations.",
      url: "https://dcdlabor.com",
      technologies: ["React", "Tailwind", "Vite", "CSS", "JavaScript", "MongoDB", "Vercel", "Resend", "Square"],
      features: ["Customized Admin Management Dashboard", "Dynamic Scheduling & Availability", "Service Showcase", "Professional Design", "Responsive Layout", "Fast Loading", "Modern UI/UX", "Database Custom Logic", "Email Service"],
      link: "https://dcdlabor.com",
      status: "Live"
    },
    {
      id: 2,
      title: "FOS Sports Academy",
      description: "A comprehensive sports academy website featuring programs, training schedules, and registration. Built with modern web technologies for optimal performance and user experience.",
      url: "https://fossportsacademy.com/",
      technologies: ["JavaScript", "HTML", "CSS", "MongoDB", "Node.js", "EmailJS", "Stripe", "Render"],
      features: [
        "Customized Admin Management Dashboard",
        "User & Coach Login with Authentication",
        "Online Program Registration",
        "Dynamic Training Schedules",
        "Coach Profiles & Management",
        "Integrated Payment Handling",
        "Database Custom Logic",
        "Email Service",
        "Mobile Responsive Design"
      ],
      link: "https://fossportsacademy.com/",
      embedLink: "https://fossportsacademy.com/?sport=baseball",
      status: "Live"
    }
  ];

  return (
    <section id="portfolio" className="section-enhanced pt-16">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] via-[var(--secondary-blue)] to-[var(--accent-blue)]"></div>
      
      {/* Enhanced Background Elements with Purple/Orange/Green */}
      <div className="floating-shape top-10 left-10 w-96 h-96 blur-3xl" style={{ background: 'linear-gradient(to bottom right, #ca8a04, #ea580c)' }}></div>
      <div className="floating-shape bottom-10 right-10 w-80 h-80 blur-3xl" style={{ background: 'linear-gradient(to top left, #16a34a, #7c3aed)' }}></div>
      <div className="floating-shape top-1/3 right-1/4 w-64 h-64 blur-2xl" style={{ background: 'linear-gradient(to right, #7c3aed, #ea580c, #16a34a)' }}></div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-20 ${headerVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="section-heading" style={{
            color: 'white',
            textShadow: '0 6px 12px rgba(0,0,0,0.4), 0 0 15px rgba(59, 130, 246, 0.8)',
            animation: 'shimmerGlow 2.5s ease-in-out infinite'
          }}>
            Featured Projects
          </h2>
          <p className="section-subheading max-w-4xl mx-auto" style={{
            color: '#e2e8f0',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
          }}>
            See the results we deliver. These live applications showcase the revenue-driving, 
            custom solutions we build for businesses like yours.
          </p>
          
          {/* Highlight Banner */}
          <div className="mt-8 inline-block">
            <div className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] rounded-2xl px-8 py-4 shadow-2xl">
              <p className="text-[var(--dark-bg)] font-bold text-lg">🚀 Both sites are LIVE and generating revenue</p>
            </div>
          </div>
        </div>

        <div ref={projectsRef} className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`relative group rounded-3xl shadow-2xl overflow-hidden border-4 transition-all duration-500 hover:shadow-3xl ${projectsVisible ? `animate-slideInUp delay-${(index + 2) * 100}` : "opacity-0"}`} style={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.98), rgba(219, 234, 254, 0.7), rgba(147, 197, 253, 0.6))', borderColor: 'rgba(245, 158, 11, 0.8)' }}>
              
              {/* Horizontal Gradient Effects with Purple/Orange/Green */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.4), rgba(124, 58, 237, 0.6), rgba(22, 163, 74, 0.4))' }}></div>
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent)' }}></div>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.3), rgba(124, 58, 237, 0.3))' }}></div>
              
              {/* Project Title */}
              <div className="relative p-8 pb-4 text-center">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--accent-blue)] bg-clip-text text-transparent mr-4">
                      {project.title}
                    </h3>
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg animate-pulse">
                      🌟 LIVE & EARNING
                    </span>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] rounded-full mx-auto"></div>
                </div>
                
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent rounded-2xl"></div>
                  <p className="relative text-[var(--dark-bg)] leading-relaxed text-lg font-medium p-4 rounded-2xl border border-blue-200/50 shadow-sm">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {/* Layout: Features Left, Website Embed Right */}
              <div className="relative p-8 pt-0">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Premium Features Section with Embed */}
                  <div style={{ marginBottom: '48px' }}>
                    <h4 style={{
                      fontWeight: 'bold',
                      color: 'var(--dark-bg)',
                      marginBottom: '32px',
                      fontSize: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        background: 'linear-gradient(to right, #9333ea, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginRight: '8px'
                      }}>💎</span>
                      Premium Features Delivered
                      <span style={{
                        background: 'linear-gradient(to right, #9333ea, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginLeft: '8px'
                      }}>💎</span>
                    </h4>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', width: '100%' }} className="mobile-features-container">
                      {/* Left: Features List - Back to flexible width */}
                      <div style={{ flex: '1', paddingRight: '160px' }} className="features-list-container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', maxWidth: '600px' }}>
                          {project.features.map((feature, featureIndex) => {
                            // Project-specific icon mappings
                            const getProjectIcons = (projectId) => {
                              if (projectId === 1) { // DCD Labor
                                return ["⚙️", "📅", "🏢", "🎨", "📱", "⚡", "✨", "🗄️", "📧"];
                              } else if (projectId === 2) { // FOS Sports Academy
                                return ["⚙️", "👥", "📝", "📅", "👨‍💼", "💳", "🗄️", "📧", "📱"];
                              }
                              return ["⚙️", "👥", "📝", "📅", "👨‍💼", "💳", "🗄️", "📧", "📱"];
                            };
                            
                            const icons = getProjectIcons(project.id);
                            const gradients = [
                              "from-blue-500 to-cyan-500",
                              "from-purple-500 to-pink-500",
                              "from-green-500 to-emerald-500",
                              "from-orange-500 to-yellow-500",
                              "from-red-500 to-rose-500",
                              "from-indigo-500 to-blue-500",
                              "from-teal-500 to-green-500"
                            ];
                            return (
                              <div key={featureIndex} className="relative group hover:scale-105 transition-all duration-300">
                                <div className={`bg-gradient-to-r ${gradients[featureIndex % gradients.length]} p-0.5 rounded-2xl shadow-lg`}>
                                  <div className="bg-white rounded-2xl p-4 h-full">
                                    <div className="flex items-center justify-center text-center">
                                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mr-4 shadow-inner flex-shrink-0">
                                        <span className="text-2xl">{icons[featureIndex % icons.length]}</span>
                                      </div>
                                      <span className="text-[var(--dark-bg)] font-semibold text-base leading-relaxed">
                                        {feature}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Right: Website Favicon - Positioned at 80% from left, centered vertically */}
                      <div style={{ 
                        position: 'absolute',
                        left: '80%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10
                      }} className="favicon-container">
                        <div 
                          style={{ position: 'relative', cursor: 'pointer' }}
                          className="group"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          {/* Favicon Container */}
                          <div 
                            style={{
                              width: '160px',
                              height: '160px',
                              background: project.id === 1 
                                ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)' // Green gradient for DCD
                                : 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',  // Blue gradient for FOS
                              borderRadius: '24px',
                              boxShadow: project.id === 1
                                ? '0 12px 40px rgba(34, 197, 94, 0.2), 0 0 0 1px rgba(134, 239, 172, 0.1) inset'
                                : '0 12px 40px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(147, 197, 253, 0.1) inset',
                              border: project.id === 1 
                                ? '4px solid #86efac' // Green border for DCD
                                : '4px solid #93c5fd',  // Blue border for FOS
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              overflow: 'hidden'
                            }}
                            className="group-hover:border-yellow-400 group-hover:scale-110 group-hover:shadow-2xl"
                          >
                            {/* Animated Background - Green for DCD, Blue for FOS */}
                            <div 
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: project.id === 1 
                                  ? 'radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)'
                                  : 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)',
                                backgroundSize: '60% 60%, 40% 40%',
                                animation: project.id === 1 ? 'greenWave 4s ease-in-out infinite' : 'blueWave 4s ease-in-out infinite',
                                zIndex: 1
                              }}
                            />
                            
                            {/* Shimmer Effect */}
                            <div 
                              style={{
                                position: 'absolute',
                                top: '0px',
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                                transition: 'left 0.6s ease',
                                zIndex: 2
                              }}
                              className="group-hover:left-full"
                            />
                            
                            {/* Favicon Image */}
                            <img 
                              src={project.id === 1 ? "/DCDLaborFavicon.png" : "/FOSFavicon.png"}
                              alt={`${project.title} favicon`}
                              style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'contain',
                                transition: 'transform 0.4s ease',
                                position: 'relative',
                                zIndex: 9999
                              }}
                              className="group-hover:scale-110"
                            />
                            
                            {/* Enhanced Click Me Overlay */}
                            <div 
                              style={{
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                right: '0px',
                                bottom: '0px',
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9))',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: 'scale(0.8)',
                                zIndex: 4
                              }}
                              className="group-hover:opacity-100 group-hover:scale-100"
                            >
                              <div style={{ 
                                color: 'white', 
                                textAlign: 'center', 
                                transform: 'translateY(10px)',
                                transition: 'transform 0.4s ease'
                              }} className="group-hover:translate-y-0">
                                <FaExternalLinkAlt style={{ 
                                  fontSize: '24px', 
                                  marginBottom: '8px', 
                                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                  display: 'block',
                                  margin: '0 auto 8px auto'
                                }} />
                                <div style={{ 
                                  fontSize: '14px', 
                                  fontWeight: 'bold', 
                                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                  marginBottom: '2px'
                                }}>Click to Visit!</div>
                                <div style={{ 
                                  fontSize: '12px', 
                                  opacity: 0.9
                                }}>Live Site</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Enhanced Live Status Badge - Corner position */}
                          <div 
                            className="live-badge"
                            style={{
                              position: 'absolute',
                              top: '-8px',
                              right: '-8px',
                              background: 'linear-gradient(135deg, #10b981, #059669)',
                              color: 'white',
                              padding: '6px 10px',
                              borderRadius: '16px',
                              fontSize: '12px',
                              fontWeight: 'bold',
                              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4), 0 0 0 2px white',
                              zIndex: 5,
                              animation: 'pulse 2s infinite',
                              border: '2px solid rgba(255, 255, 255, 0.9)'
                            }}
                          >
                            ✅ LIVE
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-bold text-[var(--dark-bg)] mb-6 text-xl flex items-center justify-center">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mr-2">⚡</span>
                      Tech Stack
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ml-2">⚡</span>
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {project.technologies.map((tech, techIndex) => {
                        const colors = [
                          { bg: 'rgba(59, 130, 246, 0.9)', border: 'rgba(59, 130, 246, 1)', shadow: 'rgba(59, 130, 246, 0.4)' },
                          { bg: 'rgba(34, 197, 94, 0.9)', border: 'rgba(34, 197, 94, 1)', shadow: 'rgba(34, 197, 94, 0.4)' },
                          { bg: 'rgba(168, 85, 247, 0.9)', border: 'rgba(168, 85, 247, 1)', shadow: 'rgba(168, 85, 247, 0.4)' },
                          { bg: 'rgba(249, 115, 22, 0.9)', border: 'rgba(249, 115, 22, 1)', shadow: 'rgba(249, 115, 22, 0.4)' },
                          { bg: 'rgba(239, 68, 68, 0.9)', border: 'rgba(239, 68, 68, 1)', shadow: 'rgba(239, 68, 68, 0.4)' },
                          { bg: 'rgba(99, 102, 241, 0.9)', border: 'rgba(99, 102, 241, 1)', shadow: 'rgba(99, 102, 241, 0.4)' },
                          { bg: 'rgba(236, 72, 153, 0.9)', border: 'rgba(236, 72, 153, 1)', shadow: 'rgba(236, 72, 153, 0.4)' }
                        ];
                        const color = colors[techIndex % colors.length];
                        return (
                          <div key={techIndex} className="relative group">
                            <div 
                              className="px-8 py-4 rounded-full text-white text-sm font-bold shadow-xl hover:scale-110 transition-all duration-300 border-2 cursor-default backdrop-blur-sm"
                              style={{ 
                                background: `linear-gradient(135deg, ${color.bg}, ${color.border})`,
                                borderColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: `0 10px 35px ${color.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.2) inset`
                              }}
                            >
                              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 50%)` }}></div>
                              <span className="relative z-10" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)' }}>{tech}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}