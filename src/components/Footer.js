import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">CodeNav LLC</h3>
            <p className="footer-description">
              Custom AI, security testing, and software development from a small team
              of senior engineers who do the work themselves.
            </p>
            <div className="footer-contact">
              <p className="footer-contact-line">
                <Mail size={16} aria-hidden="true" /> info@codenavllc.com
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/ai-solutions">Custom AI Solutions</Link></li>
              <li><Link to="/services/pentesting">Penetration Testing</Link></li>
              <li><Link to="/services/development">Software Development</Link></li>
              <li><Link to="/services/code-review">Code Review</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Leadership Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} CodeNav LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

