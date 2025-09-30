import React from 'react';
import { Link } from 'react-router-dom';
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
              Delivering cutting-edge AI solutions, comprehensive security testing, 
              and professional software development services to help your business thrive 
              in the digital age.
            </p>
            <div className="footer-contact">
              <p>📧 info@codenavllc.com</p>
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
              <li><Link to="/team/founder-one">Leadership Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="https://linkedin.com/company/codenav" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/codenav" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com/codenav" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} CodeNav LLC. All rights reserved.</p>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

