import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-text">CodeNav</span>
            <span className="logo-suffix">LLC</span>
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') && location.pathname === '/' ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="nav-dropdown">
              <span className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>
                Services
              </span>
              <div className="dropdown-content">
                <Link to="/services/ai-solutions" onClick={() => setIsMenuOpen(false)}>AI Solutions</Link>
                <Link to="/services/pentesting" onClick={() => setIsMenuOpen(false)}>Penetration Testing</Link>
                <Link to="/services/development" onClick={() => setIsMenuOpen(false)}>Software Development</Link>
                <Link to="/services/code-review" onClick={() => setIsMenuOpen(false)}>Code Review</Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

