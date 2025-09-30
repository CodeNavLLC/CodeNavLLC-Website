import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Ready to transform your business with AI solutions and cybersecurity services? 
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-info-center">
            <div className="contact-info-section">
              <h2 className="info-title">Contact Information</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>info@codenavllc.com</p>
                    <p className="method-note">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Location</h3>
                    <p>Remote-First Company</p>
                    <p className="method-note">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How quickly can you start on a project?</h3>
              <p className="faq-answer">
                We can typically begin new projects within 1-2 weeks of contract signing, 
                depending on project scope and our current capacity.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you work with small businesses?</h3>
              <p className="faq-answer">
                Absolutely! We work with organizations of all sizes, from startups to 
                enterprise companies. Our solutions are tailored to fit your budget and needs.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What is your approach to data security?</h3>
              <p className="faq-answer">
                Security is our top priority. All projects follow strict security protocols, 
                and we can work within your existing compliance frameworks.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer ongoing support?</h3>
              <p className="faq-answer">
                Yes, we provide various support packages including maintenance, updates, 
                and technical support to ensure your solutions continue to perform optimally.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How can I get in touch?</h3>
              <p className="faq-answer">
                The best way to reach us is via email at info@codenavllc.com. We typically 
                respond within 24 hours and can schedule a consultation to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

