import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../usePageTitle';
import './About.css';

const team = [
  { name: 'Connor Bluestein', role: 'Co-Founder & CEO', img: '/connor.jpeg', to: '/team/connor' },
  { name: 'Thomas Rydzewski', role: 'Co-Founder & Lead Developer', img: '/thomas.PNG', to: '/team/thomas' },
  { name: 'Daniel Hollberg', role: 'Senior Developer', img: '/daniel.jpg', to: '/team/daniel' },
];

const About = () => {
  usePageTitle('About');

  return (
    <div className="about-ed">
      {/* Hero */}
      <section className="section section--navy about-hero-ed">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1 className="display display--hero about-hero-ed__title">
            A small studio that builds AI and breaks software.
          </h1>
          <p className="lead">
            Senior engineers out of Virginia Tech's cybersecurity program, with military and
            DoD experience. The people you talk to are the people doing the work.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section section--paper">
        <div className="container">
          <span className="eyebrow"><span className="num">01</span> Story</span>
          <div className="about-story">
            <p>
              CodeNav started in 2024 from a simple frustration: most AI work ships your data to
              someone else's cloud, and most software is never tested by anyone who actually
              attacks systems for a living.
            </p>
            <p>
              Connor Bluestein and Thomas Rydzewski founded the company out of Virginia Tech's
              cybersecurity program and competitive CTF circuit, with military and DoD service
              behind them. We built the opposite kind of shop: AI that runs on your own
              infrastructure, software with security designed in from the start, and a team small
              enough that there are no hand-offs to a junior bench.
            </p>
            <p>
              Today we work with teams that care about owning their data and shipping software
              that holds up under real attack.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow"><span className="num">02</span> Team</span>
          <h2 className="display display--section section-head">The people doing the work.</h2>
          <div className="team-ed">
            {team.map((m) => (
              <Link key={m.name} to={m.to} className="team-card-ed">
                <img
                  src={m.img}
                  alt={m.name}
                  width="320"
                  height="400"
                  loading="lazy"
                  className="team-photo-ed"
                />
                <span className="team-name-ed">{m.name}</span>
                <span className="team-role-ed">{m.role} <span aria-hidden="true">&rarr;</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section section--paper">
        <div className="container">
          <span className="eyebrow"><span className="num">03</span> Credentials</span>
          <h2 className="display display--section section-head">Security work backed by real qualifications.</h2>
          <p className="credentials-note">
            The team holds offensive-security certifications and brings military and DoD
            cybersecurity experience to every engagement.
          </p>
          <p className="credentials-line">OSEP &middot; CRTO &middot; OSCP &middot; CEH &middot; Security+ &middot; eJPT</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy cta-ed">
        <div className="container">
          <h2 className="display display--section cta-ed__head">Want to know if we're the right team?</h2>
          <Link to="/contact" className="link-arrow">Start a conversation &rarr;</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
