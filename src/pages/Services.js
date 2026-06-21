import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import './Services.css';

const services = [
  {
    title: 'Custom AI Solutions',
    desc: 'Local models trained for specific, targeted tasks, running on your infrastructure so your data stays yours.',
    features: ['Task-specific model training', 'Local AI model deployment', 'AI-powered automation', 'Natural language processing', 'Computer vision'],
    link: '/services/ai-solutions',
  },
  {
    title: 'Penetration Testing',
    desc: 'We find vulnerabilities before attackers do, then hand you the fixes. Run by certified operators.',
    features: ['Network penetration testing', 'Web application testing', 'Social engineering assessments', 'Compliance testing', 'Detailed remediation reports'],
    link: '/services/pentesting',
  },
  {
    title: 'Software Development',
    desc: 'Full-stack development from first prototype to production, with security designed in from the start.',
    features: ['Web application development', 'API design and development', 'Database design', 'Cloud-native applications', 'DevOps and CI/CD'],
    link: '/services/development',
  },
  {
    title: 'Code Review',
    desc: 'Expert analysis of your codebase for quality, security, and performance, with fixes your team can act on.',
    features: ['Security vulnerability analysis', 'Performance optimization', 'Code quality assessment', 'Architecture review', 'Best-practice guidance'],
    link: '/services/code-review',
  },
];

const process = [
  { n: '01', title: 'Discovery', desc: 'We start by understanding your requirements, constraints, and goals.' },
  { n: '02', title: 'Design', desc: 'We shape the architecture for scale, security, and maintainability.' },
  { n: '03', title: 'Build', desc: 'We execute with solid practices and transparent communication throughout.' },
  { n: '04', title: 'Test & ship', desc: 'Thorough testing and a clean rollout, by the people who built it.' },
  { n: '05', title: 'Support', desc: 'Ongoing maintenance so what we built keeps working.' },
];

const Services = () => {
  usePageTitle('Services');

  return (
    <div className="services-ed">
      {/* Hero */}
      <section className="section section--navy services-hero-ed">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1 className="display display--hero services-hero-ed__title">What we do, in detail.</h1>
          <p className="lead">
            Four services, one team. AI and software built to ship, and security work that
            holds up under real attack.
          </p>
        </div>
      </section>

      {/* Service rows */}
      <section className="section section--paper">
        <div className="container">
          <div className="svc-list">
            {services.map((s, i) => (
              <div key={s.title} className="svc-row">
                <div className="svc-row__head">
                  <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="svc-title">{s.title}</h2>
                  <p className="svc-desc">{s.desc}</p>
                  <Link to={s.link} className="link-arrow">Read more &rarr;</Link>
                </div>
                <ul className="svc-features">
                  {s.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow"><span className="num">&mdash;</span> Process</span>
          <h2 className="display display--section section-head">How an engagement runs</h2>
          <div className="work-list">
            {process.map((p) => (
              <div key={p.n} className="work-row work-row--static">
                <span className="work-num">{p.n}</span>
                <span className="work-body">
                  <span className="work-title">{p.title}</span>
                  <span className="work-desc">{p.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--paper cta-ed">
        <div className="container">
          <h2 className="display display--section cta-ed__head">Not sure which you need?</h2>
          <Link to="/contact" className="link-arrow">Start a conversation &rarr;</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
