import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, Check } from 'lucide-react';
import usePageTitle from '../usePageTitle';
import './Founder.css';

/*
  ⚠️ UNVERIFIED — confirm with Daniel before treating any of the below as final copy.
  Sourced from public pages (arcadiagroupus.com team page, Virginia Tech news, LinkedIn
  headline) for a "Senior Developer" addition. The page intentionally renders only
  general, defensible statements; the specifics below are NOT rendered as fact and must
  be confirmed/corrected by Daniel:

    [ ] Exact degree title, major, and graduation year at Virginia Tech
    [ ] GPA / honors (none asserted on the page — add only if Daniel confirms)
    [x] RTX (Raytheon) title — owner-provided: "AI/ML Cybersecurity Engineer" (confirm team/dates)
    [ ] Exact Arcadia title (their site lists "Lead Product Engineer")
    [ ] Contact email daniel@codenavllc.com (assumed from the team convention)
    [ ] Permission to use the headshot sourced from arcadiagroupus.com
*/

const FounderThree = () => {
  usePageTitle('Daniel Hollberg');

  // Representative skill areas (general, drawn from his AI/product + cybersecurity roles).
  const expertise = [
    'AI Feature Development & Integration',
    'Full-Stack Software Development',
    'Product Engineering (requirements to launch)',
    'Cybersecurity & Threat Analysis',
    'Python Development & Automation',
    'Rapid Prototyping & Iteration',
  ];

  return (
    <div className="founder-page">
      <div className="container">
        {/* Header Section */}
        <div className="founder-header">
          <div className="founder-image">
            <div className="founder-photo-wrap founder-photo-wrap--daniel">
              <img
                src="/daniel.jpg"
                alt="Daniel Hollberg"
                width="180"
                height="180"
                className="founder-photo-img founder-photo-img--daniel"
              />
            </div>
          </div>
          <div className="founder-info">
            <h1 className="founder-name">Daniel Hollberg</h1>
            <h2 className="founder-title">Senior Developer</h2>
            <p className="founder-bio">
              Daniel is a software and AI engineer who builds product features end to end,
              from requirements through implementation and the iteration that follows launch.
              He studied at Virginia Tech through its National Security Institute, with a focus
              on cybersecurity, and worked as an AI/ML cybersecurity engineer at RTX (Raytheon).
              At Arcadia he owns AI product features, and at CodeNav he brings that mix of AI,
              full-stack, and security experience to client projects.
            </p>
            <div className="founder-contact">
              <a href="mailto:daniel@codenavllc.com" className="contact-link">
                <Mail size={18} aria-hidden="true" /> daniel@codenavllc.com
              </a>
              <a
                href="https://www.linkedin.com/in/danielhollberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <ExternalLink size={18} aria-hidden="true" /> LinkedIn
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
                <span className="expertise-icon"><Check size={14} aria-hidden="true" /></span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="founder-section">
          <h3 className="section-heading">Education</h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-header">
                <h4 className="education-degree">Virginia Tech</h4>
              </div>
              <p className="education-school">National Security Institute &middot; Cyber Security</p>
              <p className="education-focus">
                Studied at Virginia Tech with a focus on cybersecurity, through the university's
                National Security Institute.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="founder-section">
          <h3 className="section-heading">Professional Experience</h3>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <h4>Senior Developer</h4>
              </div>
              <p className="experience-company">CodeNav LLC</p>
              <p className="experience-description">
                Builds AI-driven and full-stack software for client engagements, taking
                features from requirements through delivery and post-launch iteration.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>Product Engineer &mdash; AI Features</h4>
              </div>
              <p className="experience-company">Arcadia</p>
              <p className="experience-description">
                Owns AI features end to end, from client requirements through implementation
                and the iteration that follows launch.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h4>AI/ML Cybersecurity Engineer</h4>
              </div>
              <p className="experience-company">RTX (Raytheon)</p>
              <p className="experience-description">
                Built AI/ML and security tooling for defense-technology programs, drawing on his
                Virginia Tech national-security background.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="founder-cta">
          <h3>Let's Build Something</h3>
          <p>
            Interested in our AI or software development work? Let's talk about how the
            CodeNav team can help with your next project.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Meet the Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FounderThree;
