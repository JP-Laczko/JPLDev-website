import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      background: 'linear-gradient(to right, #1e40af, #3b82f6, #1e40af)',
      padding: '8px 0'
    }}>
      
      {/* Logo - Top Left */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '16px',
        transform: 'translateY(-50%)'
      }}>
        <img 
          src="/JPLDevfavicon.png" 
          alt="JPLDev Logo" 
          style={{ 
            height: '50px', 
            width: 'auto'
          }} 
        />
      </div>

      {/* Centered Content */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#facc15',
            margin: '0 0 2px 0'
          }}>
            JPLDev
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#fde047',
            margin: '0'
          }}>
            Full Stack Development
          </p>
        </div>
      </div>
      
      {/* Yellow Menu Button - Top Right */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '16px',
        transform: 'translateY(-50%)'
      }}>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: '#facc15',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#fde047'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#facc15'}
        >
          {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: '16px',
          backgroundColor: 'rgba(30, 58, 138, 0.95)',
          borderRadius: '8px',
          padding: '8px',
          minWidth: '200px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 40
        }}>
          <button onClick={() => scrollToSection('home')} style={dropdownItemStyle}>Home</button>
          <button onClick={() => scrollToSection('about')} style={dropdownItemStyle}>About</button>
          <button onClick={() => scrollToSection('why-choose-jpldev')} style={dropdownItemStyle}>Why JPLDev</button>
          <button onClick={() => scrollToSection('why-fullstack')} style={dropdownItemStyle}>Full Stack vs Builders</button>
          <button onClick={() => scrollToSection('portfolio')} style={dropdownItemStyle}>Portfolio</button>
          <button onClick={() => scrollToSection('contact')} style={{
            ...dropdownItemStyle,
            backgroundColor: '#facc15',
            color: 'black',
            borderRadius: '4px',
            marginTop: '4px'
          }}>Contact</button>
        </div>
      )}
    </nav>
  );
}

const dropdownItemStyle = {
  display: 'block',
  width: '100%',
  color: '#fde047',
  fontSize: '16px',
  padding: '8px 12px',
  margin: '2px 0',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  borderRadius: '4px'
};