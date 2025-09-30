import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Next-Generation <span className="text-primary">AI Solutions</span><br />
              & Security Services
            </h1>
            <p className="hero-subtitle">
              CodeNav LLC delivers cutting-edge custom AI solutions, comprehensive penetration testing, 
              expert software development, and thorough code review services to secure and accelerate 
              your digital transformation.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="card service-card">
              <div className="card-icon">🤖</div>
              <h3 className="card-title">Custom AI Solutions</h3>
              <p className="card-description">
                Leverage the power of local AI deployment with custom solutions designed specifically 
                for your business requirements. From machine learning models to intelligent automation, 
                we deliver AI that works for you.
              </p>
              <Link to="/services/ai-solutions" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="card service-card">
              <div className="card-icon">🛡️</div>
              <h3 className="card-title">Penetration Testing</h3>
              <p className="card-description">
                Comprehensive security assessments to identify vulnerabilities before attackers do. 
                Our expert team conducts thorough penetration testing to ensure your systems 
                are secure and compliant.
              </p>
              <Link to="/services/pentesting" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="card service-card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Software Development</h3>
              <p className="card-description">
                Full-stack development services from concept to deployment. We build scalable, 
                maintainable software solutions using modern technologies and best practices 
                that drive business growth.
              </p>
              <Link to="/services/development" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="card service-card">
              <div className="card-icon">🔍</div>
              <h3 className="card-title">Code Review</h3>
              <p className="card-description">
                Expert code analysis to improve quality, security, and performance. Our thorough 
                review process identifies issues, suggests improvements, and ensures your codebase 
                follows industry best practices.
              </p>
              <Link to="/services/code-review" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-light why-choose-us">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose CodeNav LLC?</h2>
            <p className="section-subtitle">
              Expertise, innovation, and results-driven solutions
            </p>
          </div>

          <div className="grid grid-cols-3">
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Cutting-Edge Technology</h3>
              <p className="feature-description">
                We stay at the forefront of technology trends, ensuring you get access to the 
                latest innovations in AI, security, and software development.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Tailored Solutions</h3>
              <p className="feature-description">
                Every solution is customized to your specific needs and business objectives, 
                ensuring maximum value and ROI for your investment.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                Our team of certified professionals brings years of experience in AI, 
                cybersecurity, and software development to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our AI solutions and security services can drive your business forward.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Schedule Consultation
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

