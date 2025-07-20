import React from 'react';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - 100; // Offset by 100px to show full title
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      background: 'linear-gradient(to right, #1e40af, #3b82f6, #1e40af)',
      padding: '16px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Centered Navigation Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '0 24px',
        maxWidth: '100%',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        <button onClick={() => scrollToSection('home')} style={navTabStyle}>Home</button>
        <button onClick={() => scrollToSection('about')} style={navTabStyle}>About</button>
        <button onClick={() => scrollToSection('why-choose-jpldev')} style={navTabStyle}>Why JPLDev</button>
        <button onClick={() => scrollToSection('why-fullstack')} style={navTabStyle}>Full Stack vs Builders</button>
        <button onClick={() => scrollToSection('portfolio')} style={navTabStyle}>Portfolio</button>
        <button onClick={() => scrollToSection('contact')} style={{
          ...navTabStyle,
          backgroundColor: '#facc15',
          color: 'black',
          fontWeight: 'bold'
        }}>Contact</button>
      </div>
    </nav>
  );
}

const navTabStyle = {
  color: '#fde047',
  fontSize: '16px',
  padding: '12px 18px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  whiteSpace: 'nowrap',
  minWidth: 'fit-content',
  textAlign: 'center',
  fontWeight: '500'
};