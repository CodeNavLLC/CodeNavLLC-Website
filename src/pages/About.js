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
              Pioneering the future of AI solutions and cybersecurity services
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
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">CTF Victories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">$12K</span>
                  <span className="stat-label">First Year Revenue</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Year in Business</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
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
              <div className="value-icon">🚀</div>
              <h3 className="value-title">Competition-Proven Excellence</h3>
              <p className="value-description">
                Our expertise is proven through first-place finishes in prestigious cybersecurity competitions 
                including DEF CON Red Team Rumble and NSA Cyber Exercise. We bring competition-tested skills to every project.
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

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Meet Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <div className="team-avatar">
                  <span>CB</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Connor Bluestein</h3>
                <p className="team-role">Co-Founder & Chief Executive Officer</p>
                <p className="team-bio">
                  Innovative cybersecurity leader pursuing Master's in Computer Science at Virginia Tech. 
                  Cyber Warfare Officer with extensive competition success including DEF CON victories.
                </p>
                <Link to="/team/founder-one" className="team-link">
                  View Full Profile →
                </Link>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <div className="team-avatar">
                  <span>TR</span>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Thomas Rydzewski</h3>
                <p className="team-role">Co-Founder & Lead Developer</p>
                <p className="team-bio">
                  Full-stack developer and penetration tester with Master's in Computer Science from Virginia Tech. 
                  Holds OSEP and OSCP certifications with expertise in malware development and red team operations.
                </p>
                <Link to="/team/founder-two" className="team-link">
                  View Full Profile →
                </Link>
              </div>
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

