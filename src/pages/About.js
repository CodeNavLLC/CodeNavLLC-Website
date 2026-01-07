import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">About CodeNav LLC</h1>
            <p className="about-subtitle">
              Pioneering the future of AI solutions and cybersecurity
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title text-center mb-12">Our Story</h2>
            <div className="story-grid">
              <div className="story-text">
                <p className="story-paragraph">
                  Founded in 2024 by Connor Bluestein and Thomas Rydzewski, CodeNav LLC emerged from a shared vision 
                  to democratize access to cutting-edge AI technology while maintaining the highest standards 
                  of cybersecurity. Both founders, with their Virginia Tech Computer Science backgrounds and extensive 
                  cybersecurity competition experience, recognized the need for personalized, local AI solutions that don't compromise on security or privacy.
                </p>
                <p className="story-paragraph">
                  With combined expertise in AI/ML systems, penetration testing, malware development, and full-stack development, 
                  our team delivers innovative solutions to Fortune 500 companies. Our founders' military service and 
                  elite cybersecurity certifications ensure every solution meets the highest security standards.
                </p>
                <p className="story-paragraph">
                  Today, CodeNav LLC stands at the forefront of the AI revolution, delivering custom solutions 
                  that empower businesses to harness the full potential of artificial intelligence while 
                  maintaining complete control over their data and infrastructure. Our locally deployed AI systems 
                  provide enterprise-grade capabilities with uncompromising data privacy.
                </p>
              </div>
              <div className="story-founders">
                <Link to="/team/founder-one" className="founder-link-card">
                  <div className="founder-info">
                    <span className="founder-name">Connor</span>
                    <span className="founder-role">Co-Founder & CEO</span>
                  </div>
                  <span className="founder-arrow">→</span>
                </Link>
                <Link to="/team/founder-two" className="founder-link-card">
                  <div className="founder-info">
                    <span className="founder-name">Thomas</span>
                    <span className="founder-role">Co-Founder & Lead Dev</span>
                  </div>
                  <span className="founder-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Certifications</h2>
          <div className="certifications-list">
            <div className="cert-item">
              <div className="cert-badge">OSEP</div>
              <div className="cert-details">
                <h3>Offensive Security Experienced Penetration Tester</h3>
                <p>Advanced penetration testing and exploit development</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">CRTO</div>
              <div className="cert-details">
                <h3>Certified Red Team Operator</h3>
                <p>Zero-Point Security red team operations certification</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">OSCP+</div>
              <div className="cert-details">
                <h3>Offensive Security Certified Professional</h3>
                <p>Industry-standard penetration testing certification</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">CEH</div>
              <div className="cert-details">
                <h3>Certified Ethical Hacker</h3>
                <p>EC-Council ethical hacking certification</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">Sec+</div>
              <div className="cert-details">
                <h3>CompTIA Security+</h3>
                <p>Foundational cybersecurity certification</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">MDA</div>
              <div className="cert-details">
                <h3>Maldev Academy</h3>
                <p>Advanced malware development and evasion techniques</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">eJPT</div>
              <div className="cert-details">
                <h3>eLearnSecurity Junior Penetration Tester</h3>
                <p>Entry-level penetration testing certification</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-badge">Google</div>
              <div className="cert-details">
                <h3>Google Professional IT Certification</h3>
                <p>IT support and infrastructure fundamentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Mission & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Mission</h3>
              <p className="value-description">
                To empower organizations with custom AI solutions and cybersecurity services that drive 
                innovation while maintaining the highest standards of security, privacy, and reliability.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3 className="value-title">Security First</h3>
              <p className="value-description">
                Every solution we deliver prioritizes security and privacy. Our team's military background 
                and elite penetration testing certifications (OSEP, OSCP, CEH) ensure enterprise-grade 
                security in every implementation.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Local AI Deployment</h3>
              <p className="value-description">
                We specialize in locally deployed AI solutions that give you complete control over your data. 
                No cloud dependencies, no data sharing - just powerful AI running on your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-description">
              Let's discuss how our AI solutions and cybersecurity services can transform your business.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

