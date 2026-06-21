import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import './ServicePage.css';

const Development = () => {
  usePageTitle('Software Development');

  return (
    <div className="service-page">
      <section className="service-hero dev-hero">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-hero-eyebrow">Service / Software Development</span>
            <h1 className="service-hero-title">Software Development</h1>
            <p className="service-hero-subtitle">
              Full-stack development from first prototype to production, with security
              designed in from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-main-content">
              <h2>Build the Future of Your Business</h2>
              <p>
                Our software development team specializes in creating custom applications 
                that solve real business problems. We use modern technologies and best 
                practices to deliver solutions that are scalable, secure, and maintainable.
              </p>

              <h3>Development Services</h3>
              <ul className="service-features-list">
                <li>Custom web application development</li>
                <li>RESTful API design and development</li>
                <li>Database design and optimization</li>
                <li>Cloud-native application development</li>
                <li>Microservices architecture</li>
                <li>DevOps and CI/CD pipeline setup</li>
                <li>Legacy system modernization</li>
                <li>Performance optimization and scaling</li>
              </ul>

              <h3>Technologies We Use</h3>
              <p>
                We stay current with the latest technologies including React, Node.js, Python, 
                AWS, Docker, Kubernetes, and more. Our tech stack selection is always driven 
                by what's best for your specific project requirements.
              </p>
            </div>

            <div className="service-sidebar">
              <div className="service-card">
                <h3>Key Benefits</h3>
                <ul>
                  <li>Modern technology stack</li>
                  <li>Scalable architecture</li>
                  <li>Security-first approach</li>
                  <li>Agile development</li>
                  <li>Ongoing support</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Project Types</h3>
                <ul>
                  <li>Business applications</li>
                  <li>E-commerce platforms</li>
                  <li>SaaS solutions</li>
                  <li>Mobile applications</li>
                  <li>Integration projects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-cta-section">
            <h2>Ready to Build Your Next Application?</h2>
            <p>Let's discuss your project requirements and create a development roadmap.</p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;

