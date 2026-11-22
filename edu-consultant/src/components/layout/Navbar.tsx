import { useState } from 'react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span>📄</span> Aegis
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#destinations">Deadlines</a>
          <a href="#advisory">Mentors</a>
          <a href="#process">Process</a>
          <a href="#aid">Aid</a>
          <a href="#results">Results</a>
        </div>
        
        <div className="nav-actions">
          {/* Button wrapper - taaki ye mobile par right side me fix rahe */}
          <div className="nav-btn-wrapper">
            <a href="#contact">
              <Button>Book Consultation</Button>
            </a>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>Deadlines</a>
          <a href="#advisory" onClick={() => setIsMobileMenuOpen(false)}>Mentors</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
          <a href="#aid" onClick={() => setIsMobileMenuOpen(false)}>Aid</a>
          <a href="#results" onClick={() => setIsMobileMenuOpen(false)}>Results</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button style={{ width: '100%', marginTop: '10px' }}>Book Consultation</Button>
          </a>
        </div>
      )}
    </nav>
  );
};