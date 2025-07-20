import { FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Portfolio() {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.2);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.3);
  const projects = [
    {
      id: 1,
      title: "FOS Sports Academy",
      description: "A comprehensive sports academy website featuring programs, training schedules, and registration. Built with modern web technologies for optimal performance and user experience.",
      url: "https://fossportsacademy.com/",
      technologies: ["JavaScript", "HTML", "CSS", "MongoDB", "Node.js", "EmailJS", "Render"],
      features: [
        "Secure Admin Dashboard",
        "User & Coach Login with Authentication",
        "Online Program Registration",
        "Dynamic Training Schedules",
        "Coach Profiles & Management",
        "Integrated Payment Handling",
        "Mobile Responsive Design"
      ],
      link: "https://fossportsacademy.com/",
      status: "Live"
    },
    {
      id: 2,
      title: "DCD Labor",
      description: "A professional labor services website showcasing company capabilities and services. Features modern design and comprehensive service presentations.",
      url: "https://admirable-croissant-c6f255.netlify.app/",
      technologies: ["React", "Tailwind", "Vite", "CSS", "JavaScript", "MongoDB", "Netlify"],
      features: ["Service Showcase", "Professional Design", "Responsive Layout", "Fast Loading", "Modern UI/UX"],
      link: "https://admirable-croissant-c6f255.netlify.app/",
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
          <h2 className="section-heading bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] bg-clip-text text-transparent" style={{
            textShadow: '0 6px 12px rgba(0,0,0,0.4), 0 0 15px rgba(100, 150, 255, 0.08)',
            animation: 'shimmerGlow 2.5s ease-in-out infinite',
            WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.6)'
          }}>
            Featured Projects
          </h2>
          <p className="section-subheading text-gray-300 max-w-4xl mx-auto">
            See the results I deliver. These live websites showcase the revenue-driving, 
            custom solutions I build for businesses like yours.
          </p>
          
          {/* Highlight Banner */}
          <div className="mt-8 inline-block">
            <div className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] rounded-2xl px-8 py-4 shadow-2xl">
              <p className="text-[var(--dark-bg)] font-bold text-lg">🚀 Both sites are LIVE and generating revenue</p>
            </div>
          </div>
        </div>

        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className={`relative group rounded-3xl shadow-2xl overflow-hidden border-4 transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl ${projectsVisible ? `animate-slideInUp delay-${(index + 2) * 100}` : "opacity-0"}`} style={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.98), rgba(219, 234, 254, 0.7), rgba(147, 197, 253, 0.6))', borderColor: 'rgba(245, 158, 11, 0.8)' }}>
              
              {/* Horizontal Gradient Effects with Purple/Orange/Green */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.4), rgba(124, 58, 237, 0.6), rgba(22, 163, 74, 0.4))' }}></div>
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent)' }}></div>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to right, rgba(234, 88, 12, 0.3), rgba(124, 58, 237, 0.3))' }}></div>
              <div className="h-64 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--secondary-blue)] relative overflow-hidden rounded-t-2xl group cursor-pointer"
                   onClick={() => window.open(project.link, '_blank')}>
                {/* Preview Mockup */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-gray-100 h-6 flex items-center px-2 gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="ml-2 text-xs text-gray-500 truncate">{project.url}</div>
                  </div>
                  <div className="p-4 h-full bg-white">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                      <div className="h-8 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--secondary-blue)] rounded w-full"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-16 bg-gray-100 rounded"></div>
                        <div className="h-16 bg-gray-100 rounded"></div>
                        <div className="h-16 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FaExternalLinkAlt className="text-2xl mx-auto mb-2" />
                    <span className="text-sm font-semibold">Click to Visit Site</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl animate-pulse">
                  ✅ {project.status.toUpperCase()}
                </div>
              </div>
              
              <div className="relative p-8 text-center">
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
                
                <div className="mb-8">
                  <h4 className="font-bold text-[var(--dark-bg)] mb-6 text-xl flex items-center justify-center">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mr-2">💎</span>
                    Premium Features Delivered
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">💎</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {project.features.map((feature, index) => {
                      // Project-specific icon mappings
                      const getProjectIcons = (projectId) => {
                        if (projectId === 1) { // FOS Sports Academy
                          return ["🔒", "👥", "📝", "📅", "👨‍💼", "💳", "📱"];
                        } else if (projectId === 2) { // DCD Labor
                          return ["🏢", "🎨", "📱", "⚡", "✨"];
                        }
                        return ["🔒", "👥", "📝", "📅", "👨‍💼", "💳", "📱"];
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
                        <div key={index} className="relative group hover:scale-105 transition-all duration-300">
                          <div className={`bg-gradient-to-r ${gradients[index % gradients.length]} p-0.5 rounded-2xl shadow-lg`}>
                            <div className="bg-white rounded-2xl p-4 h-full">
                              <div className="flex items-center justify-center text-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mr-4 shadow-inner flex-shrink-0">
                                  <span className="text-2xl">{icons[index % icons.length]}</span>
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
                
                <div className="mb-8">
                  <h4 className="font-bold text-[var(--dark-bg)] mb-6 text-xl flex items-center justify-center">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mr-2">⚡</span>
                    Tech Stack
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ml-2">⚡</span>
                  </h4>
                  <div className="flex flex-wrap gap-4 justify-center max-w-md mx-auto">
                    {project.technologies.map((tech, index) => {
                      const colors = [
                        { bg: 'rgba(59, 130, 246, 0.9)', border: 'rgba(59, 130, 246, 1)', shadow: 'rgba(59, 130, 246, 0.4)' },
                        { bg: 'rgba(34, 197, 94, 0.9)', border: 'rgba(34, 197, 94, 1)', shadow: 'rgba(34, 197, 94, 0.4)' },
                        { bg: 'rgba(168, 85, 247, 0.9)', border: 'rgba(168, 85, 247, 1)', shadow: 'rgba(168, 85, 247, 0.4)' },
                        { bg: 'rgba(249, 115, 22, 0.9)', border: 'rgba(249, 115, 22, 1)', shadow: 'rgba(249, 115, 22, 0.4)' },
                        { bg: 'rgba(239, 68, 68, 0.9)', border: 'rgba(239, 68, 68, 1)', shadow: 'rgba(239, 68, 68, 0.4)' },
                        { bg: 'rgba(99, 102, 241, 0.9)', border: 'rgba(99, 102, 241, 1)', shadow: 'rgba(99, 102, 241, 0.4)' },
                        { bg: 'rgba(236, 72, 153, 0.9)', border: 'rgba(236, 72, 153, 1)', shadow: 'rgba(236, 72, 153, 0.4)' }
                      ];
                      const color = colors[index % colors.length];
                      return (
                        <div key={index} className="relative group">
                          <div 
                            className="px-10 py-5 rounded-full text-white text-lg font-bold shadow-xl hover:scale-110 transition-all duration-300 border-2 cursor-default backdrop-blur-sm"
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
                
                <div className="flex gap-4 mt-6">
                  <div className="flex-1 relative group">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative text-center py-6 px-10 rounded-3xl font-black text-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group shadow-2xl border-4 animate-pulse"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(245, 158, 11, 1), rgba(251, 191, 36, 1), rgba(245, 158, 11, 1))',
                        borderColor: 'rgba(255, 255, 255, 0.9)',
                        color: 'white',
                        boxShadow: '0 15px 50px rgba(245, 158, 11, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.3) inset'
                      }}
                    >
                      <div className="w-10 h-8 bg-white/30 rounded-lg mr-4 flex items-center justify-center border-2 border-white/40 shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <span className="text-white font-black text-3xl">
                        🚀 VIEW LIVE SITE!
                      </span>
                      <FaExternalLinkAlt className="ml-4 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300 text-2xl" />
                    </a>
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