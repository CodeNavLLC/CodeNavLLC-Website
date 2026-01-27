import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamCertifications = [
    {
      id: 'osep',
      abbr: 'OSEP',
      title: 'Offensive Security Experienced Penetration Tester',
      description: 'Advanced penetration testing and exploit development',
      logoSrc: '/certs/osep.png',
    },
    {
      id: 'crto',
      abbr: 'CRTO',
      title: 'Certified Red Team Operator',
      description: 'Zero-Point Security red team operations certification',
      logoSrc: '/certs/crto.png',
    },
    {
      id: 'oscp',
      abbr: 'OSCP',
      title: 'Offensive Security Certified Professional',
      description: 'Industry-standard penetration testing certification',
      logoSrc: '/certs/oscp.png',
    },
    {
      id: 'ceh',
      abbr: 'CEH',
      title: 'Certified Ethical Hacker (Practical)',
      description: 'EC-Council ethical hacking certification',
      logoSrc: '/certs/CEHPRACTICAL_5FB43496785F.png',
    },
    {
      id: 'secplus',
      abbr: 'Sec+',
      title: 'CompTIA Security+',
      description: 'Foundational cybersecurity certification',
      logoSrc: '/certs/Security+-jpg.jpg',
    },
    {
      id: 'ejpt',
      abbr: 'eJPT',
      title: 'eLearnSecurity Junior Penetration Tester',
      description: 'Entry-level penetration testing certification',
      logoSrc: '/certs/ejpt.png',
    },
  ];

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

      {/* Team + Story (side-by-side) */}
      <section className="section team-story-section">
        <div className="container">
          <div className="team-story-grid">
            <div className="team-story-story">
              <h2 className="section-title mb-12">Our Story</h2>
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
            </div>

            <div className="team-story-team">
              <h2 className="section-title mb-12">Our Team</h2>
              <div className="team-stack">
                <Link to="/team/connor" className="team-card team-card-link">
                  <div className="team-image">
                    <div className="team-photo-wrap team-photo-wrap--connor">
                      <img
                        src="/connor.jpeg"
                        alt="Connor Bluestein"
                        className="team-photo-img team-photo-img--connor"
                      />
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Connor Bluestein</h3>
                    <p className="team-role">Co-Founder & CEO</p>
                  </div>
                </Link>

                <Link to="/team/thomas" className="team-card team-card-link">
                  <div className="team-image">
                    <div className="team-photo-wrap team-photo-wrap--thomas">
                      <img
                        src="/thomas.PNG"
                        alt="Thomas Rydzewski"
                        className="team-photo-img team-photo-img--thomas"
                      />
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Thomas Rydzewski</h3>
                    <p className="team-role">Co-Founder & Lead Dev</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Team&apos;s Certifications</h2>
          <div className="certifications-list">
            {teamCertifications.map((cert) => (
              <div key={cert.id} className="cert-item">
                <div className="cert-badge cert-badge--logo">
                  <img
                    src={cert.logoSrc}
                    alt={`${cert.title} logo`}
                    className="cert-logo"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="cert-badge-fallback">{cert.abbr}</span>
                </div>
                <div className="cert-details">
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
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
                and elite penetration testing certifications (OSEP, CRTO, OSCP) ensure enterprise-grade 
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

