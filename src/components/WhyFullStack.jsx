import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyFullStack() {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [tableRef, tableVisible] = useScrollAnimation(0.2);
  const comparisons = [
    {
      category: "Design & Customization",
      websiteBuilder: "Limited templates, cookie-cutter look",
      fullStack: "Completely custom design tailored to your brand"
    },
    {
      category: "Performance & SEO",
      websiteBuilder: "Slow loading, poor search rankings",
      fullStack: "Optimized for speed and search engines"
    },
    {
      category: "Functionality",
      websiteBuilder: "Basic features only, no custom logic",
      fullStack: "Advanced features and custom integrations"
    },
    {
      category: "Scalability",
      websiteBuilder: "Limited growth potential",
      fullStack: "Scalable architecture that grows with you"
    },
    {
      category: "Cost Structure",
      websiteBuilder: "Monthly fees forever, no ownership",
      fullStack: "Revenue-sharing model, you own your assets"
    },
    {
      category: "User Experience",
      websiteBuilder: "Generic interface, poor conversions",
      fullStack: "Professional UX designed for results"
    }
  ];


  return (
    <section id="why-fullstack" className="section-enhanced pt-16">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--very-light-gray)] via-white to-[var(--very-light-gray)]"></div>
      
      {/* Enhanced Background Elements */}
      <div className="floating-shape top-20 right-20 w-96 h-96 bg-gradient-to-bl from-[var(--accent-gold)] to-[var(--light-gold)]"></div>
      <div className="floating-shape bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[var(--accent-blue)] to-[var(--light-blue)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`text-center mb-16 ${headerVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="section-heading text-[var(--dark-bg)]">
            Website Builders vs <span className="bg-gradient-to-r from-[var(--accent-gold)] to-[var(--light-gold)] bg-clip-text text-transparent">Full Stack Development</span>
          </h2>
          <p className="section-subheading text-[var(--medium-gray)] max-w-4xl mx-auto">
            See exactly why custom development delivers better results than template-based website builders.
          </p>
        </div>

        {/* Comparison Table */}
        <div ref={tableRef} className={`${tableVisible ? "animate-scaleIn delay-200" : "opacity-0"}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)]">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold" style={{ color: 'white' }}>Category</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-2xl font-bold" style={{ color: 'white' }}>Website Builders</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-2xl font-bold" style={{ color: 'white' }}>Full Stack Development</h3>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisons.map((comparison, index) => (
                <div key={index} className={`grid grid-cols-3 hover:bg-gray-50 transition-colors duration-300 animate-slideInUp delay-${(index + 3) * 100}`}>
                  {/* Category */}
                  <div className="p-6 border-r border-gray-200" style={{ backgroundColor: 'rgba(55, 65, 81, 0.9)' }}>
                    <h4 className="text-xl font-bold text-center" style={{ color: 'white' }}>{comparison.category}</h4>
                  </div>
                  
                  {/* Website Builder (Red/Negative) */}
                  <div className="p-6 border-r border-gray-200" style={{ backgroundColor: 'rgba(127, 29, 29, 0.8)' }}>
                    <div className="flex items-start">
                      <FaTimesCircle className="text-xl mr-3 mt-1 flex-shrink-0" style={{ color: 'red' }} />
                      <p className="font-semibold leading-relaxed text-lg" style={{ color: 'white' }}>{comparison.websiteBuilder}</p>
                    </div>
                  </div>
                  
                  {/* Full Stack (Green/Positive) */}
                  <div className="p-6" style={{ backgroundColor: 'rgba(21, 128, 61, 0.8)' }}>
                    <div className="flex items-start">
                      <FaCheckCircle className="text-xl mr-3 mt-1 flex-shrink-0" style={{ color: 'green' }} />
                      <p className="font-semibold leading-relaxed text-lg" style={{ color: 'white' }}>{comparison.fullStack}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}