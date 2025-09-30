import React from 'react';
import { Link } from 'react-router-dom';
import './Founder.css';

const FounderTwo = () => {
  const certifications = [
    {
      name: "Offensive Security Experienced Penetration Tester (OSEP)",
      issuer: "Offensive Security",
      year: "",
      description: "Advanced penetration testing certification focusing on evasion techniques and advanced exploitation"
    },
    {
      name: "Offensive Security Certified Professional+ (OSCP)",
      issuer: "Offensive Security",
      year: "",
      description: "Industry-leading hands-on penetration testing certification"
    },
    {
      name: "Certified Ethical Hacker (CEH) - Practical",
      issuer: "EC-Council",
      year: "",
      description: "Practical ethical hacking certification with hands-on testing experience"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: "",
      description: "Foundational cybersecurity certification covering network security and risk management"
    },
    {
      name: "Junior Penetration Tester (eJPT)",
      issuer: "eLearnSecurity",
      year: "",
      description: "Entry-level practical penetration testing certification"
    },
    {
      name: "Malware Development Course",
      issuer: "Maldev Academy",
      year: "",
      description: "Specialized certification in malware analysis and development techniques"
    }
  ];

  const expertise = [
    "Full Stack Development (Python, Java, C/C++, React)",
    "Penetration Testing & Red Team Operations", 
    "Malware Development & Analysis",
    "Database Systems (Oracle, SQL, PL/SQL)",
    "Cloud Security & IoT/SCADA Systems",
    "Cyber/Electronic Warfare Operations"
  ];

  const education = [
    {
      degree: "Master of Engineering in Computer Science",
      school: "Virginia Tech",
      year: "",
      focus: "Concentration in Cyber Security, GPA: 3.84 (Summa Cum Laude)"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Virginia Tech",
      year: "",
      focus: "Secure Computing Track, GPA: 3.71 (Magna Cum Laude)"
    }
  ];

  return (
    <div className="founder-page">
      <div className="container">
        {/* Header Section */}
        <div className="founder-header">
          <div className="founder-image">
            <div className="placeholder-avatar">
              <span>TR</span>
            </div>
          </div>
          <div className="founder-info">
            <h1 className="founder-name">Thomas Rydzewski</h1>
            <h2 className="founder-title">Co-Founder & Lead Developer</h2>
            <p className="founder-bio">
              Thomas is a skilled full-stack developer and penetration tester who co-founded CodeNav LLC in 2024. 
              He holds a Master's in Computer Science from Virginia Tech with a focus on Cyber Security, 
              and serves as a Cyber/Electronic Warfare Officer. Having expertise in penetration testing, 
              malware development, and full-stack development, Thomas holds prestigious certifications including OSEP and OSCP, 
              and has achieved top placements in numerous cybersecurity competitions.
            </p>
            <div className="founder-contact">
              <a href="mailto:thomas@codenavllc.com" className="contact-link">
                📧 thomas@codenavllc.com
              </a>
              <a href="https://linkedin.com/in/thomas-r-4b770822b" className="contact-link">
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
                <h4>Founder/Lead Developer</h4>
              </div>
              <p className="experience-company">CodeNav LLC</p>
              <p className="experience-description">
                Co-founded and developing internal AI/ML based tooling to significantly accelerate senior hiring 
                technical reports to Fortune 500 companies. Leading development of secure, scalable solutions.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Application Developer 2</h4>
              </div>
              <p className="experience-company">State Level Government</p>
              <p className="experience-description">
                Full Stack Developer tasked with creating new modules and responding to requests from internal users, 
                working with enterprise-level systems and databases.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Penetration Tester Consultant</h4>
              </div>
              <p className="experience-company">RSI Security</p>
              <p className="experience-description">
                Execute penetration tests, social engineering assessments, and security evaluations on internal & external networks, 
                web applications, mobile applications, AWS architecture, and IoT devices.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Computer Engineer (Emerging Technologies)</h4>
              </div>
              <p className="experience-company">Defense Information Systems Agency</p>
              <p className="experience-description">
                Conducted research, review, testing, and provided recommendations for industry or custom solutions to DOD problems 
                in the Emerging Technologies Directorate.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Second Lieutenant - Cyber/Electronic Warfare Officer</h4>
              </div>
              <p className="experience-company">U.S. Army - Fort Indiantown Gap, PA</p>
              <p className="experience-description">
                Leading soldiers and maintaining technical knowledge to advise leaders and employ capabilities of CEMA section. 
                Specializing in cyber operations and electronic warfare.
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

        {/* Competition Achievements & Research Section */}
        <section className="founder-section">
          <h3 className="section-heading">Competition Achievements & Research</h3>
          <div className="achievements-grid">
            <div className="achievement-category">
              <h4 className="achievement-title">🏆 CTF Competition Results</h4>
              <ul className="achievement-list">
                <li>1st Place - ARMY CENTRAL COMMAND Best Cyber Warrior 2023</li>
                <li>1st Place - TracerFire 2023</li>
                <li>1st Place - Cyberbytes 2023/2024</li>
                <li>2nd Place - ARCENT Best Cyber Warrior 2022</li>
                <li>3rd Place - Hack the Hospital Red Team 2023</li>
                <li>4th Place - NSA Cyber Exercise 2024 (1st in Software Dev)</li>
                <li>12th Place - DEFCON Red Team CTF 2023</li>
              </ul>
            </div>
            <div className="achievement-category">
              <h4 className="achievement-title">📚 Published Research</h4>
              <ul className="achievement-list">
                <li><strong>Perp Framework:</strong> A scalable, stand-alone, purple team competition framework with individual subnets deployed using docker compose</li>
                <li>Published research available at: whitehatginger.com/tools-ive-made/perp</li>
                <li>Virginia Tech Digital Library: hdl.handle.net/10919/129513</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="founder-cta">
          <h3>Ready to Build Something Amazing?</h3>
          <p>
            Interested in our development services or cybersecurity solutions? 
            Let's discuss how we can help secure and advance your technology infrastructure.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/team/founder-one" className="btn btn-secondary">
              Meet Our CEO
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FounderTwo;

