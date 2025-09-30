import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Custom AI Solutions",
      icon: "🤖",
      description: "Tailored artificial intelligence implementations that run locally on your infrastructure, ensuring complete data privacy and control.",
      features: [
        "Local AI model deployment",
        "Custom machine learning solutions", 
        "AI-powered automation",
        "Natural language processing",
        "Computer vision applications"
      ],
      link: "/services/ai-solutions",
      color: "blue"
    },
    {
      title: "Penetration Testing",
      icon: "🛡️",
      description: "Comprehensive security assessments to identify vulnerabilities and strengthen your defenses against cyber threats.",
      features: [
        "Network penetration testing",
        "Web application security testing",
        "Social engineering assessments",
        "Compliance testing",
        "Detailed security reports"
      ],
      link: "/services/pentesting",
      color: "red"
    },
    {
      title: "Software Development",
      icon: "💻",
      description: "Full-stack development services using modern technologies to build scalable, maintainable software solutions.",
      features: [
        "Web application development",
        "API design and development",
        "Database design and optimization",
        "Cloud-native applications",
        "DevOps and CI/CD implementation"
      ],
      link: "/services/development",
      color: "green"
    },
    {
      title: "Code Review",
      icon: "🔍",
      description: "Expert analysis of your codebase to improve quality, security, and performance while ensuring best practices.",
      features: [
        "Security vulnerability analysis",
        "Performance optimization",
        "Code quality assessment",
        "Architecture review",
        "Best practices implementation"
      ],
      link: "/services/code-review",
      color: "purple"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">
              Comprehensive technology solutions designed to transform your business 
              with cutting-edge AI, robust security, and expert development services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-detail-card ${service.color}`}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h2 className="service-title">{service.title}</h2>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h3>Key Features:</h3>
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={service.link} className="service-cta-btn">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-light process-section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Discovery & Planning</h3>
              <p className="step-description">
                We start by understanding your unique requirements, challenges, and goals 
                to create a tailored solution strategy.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Design & Architecture</h3>
              <p className="step-description">
                Our team designs the optimal solution architecture, ensuring scalability, 
                security, and performance from the ground up.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Implementation</h3>
              <p className="step-description">
                We execute the project using industry best practices, maintaining 
                transparent communication throughout the development process.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Testing & Deployment</h3>
              <p className="step-description">
                Comprehensive testing ensures quality and security before deployment, 
                followed by smooth rollout and training.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3 className="step-title">Support & Maintenance</h3>
              <p className="step-description">
                Ongoing support and maintenance services ensure your solutions continue 
                to perform optimally and evolve with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's discuss your project requirements and explore how our services 
              can help you achieve your technology goals.
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

export default Services;

