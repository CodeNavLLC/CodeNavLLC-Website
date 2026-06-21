import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import './ServicePage.css';

const CodeReview = () => {
  usePageTitle('Code Review');

  return (
    <div className="service-page">
      <section className="service-hero review-hero">
        <div className="container">
          <div className="service-hero-content">
            <span className="service-hero-eyebrow">Service / Code Review</span>
            <h1 className="service-hero-title">Code Review</h1>
            <p className="service-hero-subtitle">
              A second set of expert eyes on your codebase, for security, performance, and
              maintainability, with fixes your team can act on.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-main-content">
              <h2>Optimize Your Code Quality</h2>
              <p>
                Our code review helps you identify issues, improve performance, and keep your
                codebase following solid practices. We provide actionable insights that make your
                code more maintainable and secure.
              </p>

              <h3>Review Services</h3>
              <ul className="service-features-list">
                <li>Security vulnerability assessment</li>
                <li>Performance optimization analysis</li>
                <li>Code quality and maintainability review</li>
                <li>Architecture and design pattern evaluation</li>
                <li>Best practices implementation guidance</li>
                <li>Documentation and commenting review</li>
                <li>Testing strategy assessment</li>
                <li>Refactoring recommendations</li>
              </ul>

              <h3>What You'll Receive</h3>
              <p>
                Our detailed reports include specific recommendations, code examples, 
                and prioritized action items. We also provide ongoing consultation 
                to help implement improvements effectively.
              </p>
            </div>

            <div className="service-sidebar">
              <div className="service-card">
                <h3>Key Benefits</h3>
                <ul>
                  <li>Improved code quality</li>
                  <li>Enhanced security</li>
                  <li>Better performance</li>
                  <li>Reduced technical debt</li>
                  <li>Team knowledge transfer</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Languages & Frameworks</h3>
                <ul>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>React/Node.js</li>
                  <li>And many more...</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-cta-section">
            <h2>Improve Your Code Quality Today</h2>
            <p>Get expert insights into your codebase and actionable recommendations for improvement.</p>
            <Link to="/contact" className="btn btn-primary">
              Request Code Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeReview;

