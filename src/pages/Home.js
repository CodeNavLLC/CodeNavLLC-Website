import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import './Home.css';

const work = [
  { n: '01', title: 'Custom AI', desc: 'Local models trained for your specific, targeted tasks, running on your own infrastructure. Your data never leaves your network.', to: '/services/ai-solutions' },
  { n: '02', title: 'Offensive Security', desc: 'Network, web, cloud and IoT testing by engineers who hold OSEP, OSCP and CRTO.', to: '/services/pentesting' },
  { n: '03', title: 'Software Development', desc: 'Full-stack work from first prototype to production, with security built in.', to: '/services/development' },
  { n: '04', title: 'Code Review', desc: 'A second set of expert eyes on your codebase, with fixes your team can act on.', to: '/services/code-review' },
];

const Home = () => {
  usePageTitle('Custom AI & Security Engineering');

  return (
    <div className="home">
      {/* Hero */}
      <section className="section section--navy hero-ed">
        <div className="container">
          <span className="eyebrow hero-ed__eyebrow">CodeNav LLC <span className="num">/ AI &amp; Offensive Security</span></span>
          <h1 className="display display--hero hero-ed__title">
            Security and AI, built by people who ship and <span className="accent-word">break</span> software.
          </h1>
          <p className="lead hero-ed__lead">
            A small studio of senior engineers. We build local AI trained for specific tasks,
            develop full-stack software, and pressure-test it the way real attackers would.
          </p>
          <Link to="/contact" className="link-arrow">Start a conversation &rarr;</Link>
        </div>
      </section>

      {/* Work */}
      <section className="section section--paper">
        <div className="container">
          <span className="eyebrow"><span className="num">01</span> What we do</span>
          <h2 className="display display--section section-head">
            Four things, done by the same people who do the work.
          </h2>
          <div className="work-list">
            {work.map((w) => (
              <Link key={w.n} to={w.to} className="work-row">
                <span className="work-num">{w.n}</span>
                <span className="work-body">
                  <span className="work-title">{w.title}</span>
                  <span className="work-desc">{w.desc}</span>
                </span>
                <span className="work-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow"><span className="num">02</span> Approach</span>
          <h2 className="display display--section section-head">How we work</h2>
          <div className="approach__grid">
            <p className="approach__item">
              <strong>Local-first AI</strong>
              We train models for your specific, targeted tasks and run them on your own
              hardware. No third-party APIs, no data leaving your network, no vendor lock-in.
            </p>
            <p className="approach__item">
              <strong>Security in the build</strong>
              The people writing your software also break software for a living. It is a habit
              here, not a checklist bolted on at the end.
            </p>
            <p className="approach__item">
              <strong>Senior people, no hand-offs</strong>
              You work directly with the engineers doing the work. No account managers, no
              junior bench learning on your project.
            </p>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="section section--paper">
        <div className="container team-teaser">
          <span className="eyebrow"><span className="num">03</span> Team</span>
          <h2 className="display display--section section-head">
            Three engineers with military, DoD, and red-team backgrounds.
          </h2>
          <Link to="/about" className="link-arrow">Meet the team &rarr;</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy cta-ed">
        <div className="container">
          <h2 className="display display--section cta-ed__head">
            Have something to build, or something to break?
          </h2>
          <Link to="/contact" className="link-arrow">Start a conversation &rarr;</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
