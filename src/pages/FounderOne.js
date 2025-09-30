import React from 'react';
import { Link } from 'react-router-dom';
import './Founder.css';

const FounderOne = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: "",
      description: "Industry-standard cybersecurity certification covering threat analysis, risk management, and security operations"
    },
    {
      name: "Google Professional IT Certification",
      issuer: "Google",
      year: "",
      description: "Comprehensive IT support and systems administration certification"
    }
  ];

  const expertise = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Threat Detection",
    "Industrial Control Systems (ICS) & OT Security",
    "Data Analytics & Computational Modeling",
    "Python Development & Automation",
    "Spectrum Analysis & Electronic Warfare"
  ];

  const education = [
    {
      degree: "Master of Engineering in Computer Science and Applications",
      school: "Virginia Tech",
      year: "",
      focus: "Concentration in Computer Security"
    },
    {
      degree: "Bachelor of Science in Computational Modeling and Data Analytics",
      school: "Virginia Tech", 
      year: "",
      focus: "Magna Cum Laude, Concentration in Cybersecurity and Cryptography, Minors in Math, Computer Science, Leadership and Service"
    }
  ];

  return (
    <div className="founder-page">
      <div className="container">
        {/* Header Section */}
        <div className="founder-header">
          <div className="founder-image">
            <div className="placeholder-avatar">
              <span>CB</span>
            </div>
          </div>
          <div className="founder-info">
            <h1 className="founder-name">Connor Bluestein</h1>
            <h2 className="founder-title">Founder & Chief Executive Officer</h2>
            <p className="founder-bio">
              Connor is an innovative cybersecurity leader and entrepreneur who founded CodeNav LLC in 2024. 
              Currently pursuing his Master's in Computer Science at Virginia Tech with a focus on Computer Security, 
              he serves as a Cyber Warfare Officer in the Virginia Army National Guard. 
              With extensive experience in AI/ML systems, threat detection, and industrial control systems security, 
              Connor has led his teams to first-place finishes in prestigious cybersecurity competitions including DEF CON Red Team Rumble.
            </p>
            <div className="founder-contact">
              <a href="mailto:connor@codenavllc.com" className="contact-link">
                📧 connor@codenavllc.com
              </a>
              <a href="https://linkedin.com/in/connorbluestein" className="contact-link">
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <section className="founder-section">
          <h3 className="section-heading">Areas of Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((skill, index) => (
              <div key={index} className="expertise-item">
                <span className="expertise-icon">✓</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="founder-section">
          <h3 className="section-heading">Education</h3>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h4 className="education-degree">{edu.degree}</h4>
                  {edu.year && <span className="education-year">{edu.year}</span>}
                </div>
                <p className="education-school">{edu.school}</p>
                <p className="education-focus">{edu.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="founder-section">
          <h3 className="section-heading">Professional Experience</h3>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <h4>Founder & CEO</h4>
              </div>
              <p className="experience-company">CodeNav LLC</p>
              <p className="experience-description">
                Founded and managed a company focused on software development and cybersecurity consulting strategies, 
                delivering AI-driven psychological analysis and threat detection tools to small and medium-sized companies. 
                Spearheaded investor outreach and generated $12K in first-year revenue while managing multiple client projects.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Cyber Warfare Officer</h4>
              </div>
              <p className="experience-company">Virginia Army National Guard | 91st Cyber Brigade</p>
              <p className="experience-description">
                Working in Industrial Controls Systems (ICS) and Operational Technology (OT) Environments, 
                providing critical cybersecurity expertise for military operations.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Electromagnetic Spectrum Analysis Intern</h4>
              </div>
              <p className="experience-company">U.S. Department of Defense | Chief Information Officer</p>
              <p className="experience-description">
                Engineered and deployed a data-driven dashboard solution that optimized spectrum allocation analysis, 
                enabling the Department of Defense to realize over $500K in operational savings. Delivered custom software 
                solution to Director and three GS-15 Deputy Directors.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Cyber Engineering Intern</h4>
              </div>
              <p className="experience-company">Percival Engineering | General Emulation Team</p>
              <p className="experience-description">
                Built locally hosted semantic search engine powered by AI and large language models, replacing multi-week 
                manual sorting of 100+ TB of data with sub-hour automated process. Spearheaded CI/CD initiative that was 
                adopted company-wide after presenting to CEO and upper management.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="founder-section">
          <h3 className="section-heading">Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-header">
                  <h4 className="cert-name">{cert.name}</h4>
                  {cert.year && <span className="cert-year">{cert.year}</span>}
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competition Achievements Section */}
        <section className="founder-section">
          <h3 className="section-heading">Competition Achievements & Leadership</h3>
          <div className="achievements-grid">
            <div className="achievement-category">
              <h4 className="achievement-title">🏆 First Place Victories</h4>
              <ul className="achievement-list">
                <li>DEF CON Red Team Rumble</li>
                <li>U.S. Army Central Command Best Cyber Warrior</li>
                <li>Cyber Combat Exercise (NSA Cyber Exercise)</li>
                <li>Citadel Cyber Siege</li>
                <li>Quantico Cyber Hub Cybersecurity Showdown</li>
              </ul>
            </div>
            <div className="achievement-category">
              <h4 className="achievement-title">🎖️ Leadership Positions</h4>
              <ul className="achievement-list">
                <li>President - Cyber Security Club, Virginia Tech (550+ members)</li>
                <li>Cyber Team Officer in Charge - VA Tech Corps of Cadets</li>
                <li>Distinguished Military Graduate - Army ROTC</li>
                <li>Corps of Cadets Graduation with Distinction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="founder-cta">
          <h3>Ready to Work Together?</h3>
          <p>
            Interested in learning more about our services or discussing your next project? 
            Let's connect and explore how we can help achieve your goals.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/team/founder-two" className="btn btn-secondary">
              Meet Our Co-Founder
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FounderOne;

