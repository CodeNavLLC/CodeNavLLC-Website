import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const AIServices = () => {
  return (
    <div className="service-page">
      <section className="service-hero ai-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Custom AI Solutions</h1>
            <p className="service-hero-subtitle">
              Harness the power of artificial intelligence with locally deployed, 
              custom solutions designed specifically for your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-main-content">
              <h2>Transform Your Business with Local AI</h2>
              <p>
                Our custom AI solutions give you the power of advanced artificial intelligence 
                while maintaining complete control over your data. We specialize in local AI 
                deployments that ensure privacy, security, and compliance with your industry requirements.
              </p>

              <h3>What We Offer</h3>
              <ul className="service-features-list">
                <li>Custom machine learning model development</li>
                <li>Local AI infrastructure setup and optimization</li>
                <li>Natural language processing applications</li>
                <li>Computer vision and image recognition systems</li>
                <li>AI-powered automation and workflow optimization</li>
                <li>Predictive analytics and data insights</li>
                <li>Integration with existing business systems</li>
                <li>Ongoing AI model training and improvement</li>
              </ul>

              <h3>Why Choose Local AI?</h3>
              <p>
                Local AI deployment offers significant advantages including enhanced data privacy, 
                reduced latency, compliance with data regulations, and cost-effective scaling. 
                Your sensitive data never leaves your infrastructure.
              </p>
            </div>

            <div className="service-sidebar">
              <div className="service-card">
                <h3>Key Benefits</h3>
                <ul>
                  <li>✅ Complete data privacy</li>
                  <li>✅ No ongoing API costs</li>
                  <li>✅ Customizable to your needs</li>
                  <li>✅ Regulatory compliance</li>
                  <li>✅ Offline functionality</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Perfect For</h3>
                <ul>
                  <li>Healthcare organizations</li>
                  <li>Financial institutions</li>
                  <li>Manufacturing companies</li>
                  <li>Legal practices</li>
                  <li>Research institutions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-cta-section">
            <h2>Ready to Implement AI in Your Business?</h2>
            <p>Let's discuss your AI requirements and create a custom solution for your organization.</p>
            <Link to="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;

