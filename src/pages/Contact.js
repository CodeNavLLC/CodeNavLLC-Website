import React from 'react';
import { Mail } from 'lucide-react';
import usePageTitle from '../usePageTitle';
import './Contact.css';

const faqs = [
  {
    q: 'How quickly can you start?',
    a: 'Usually within one to two weeks of a signed engagement, depending on scope and current load.',
  },
  {
    q: 'Do you work with small teams?',
    a: 'Yes. We work with everyone from early-stage startups to enterprise teams, and scope the work to fit.',
  },
  {
    q: 'How do you handle data security?',
    a: 'Security is the default, not an add-on. We can run inside your existing compliance framework, and our AI work is built to keep your data on your own infrastructure.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. We offer maintenance and support arrangements so what we build keeps working after launch.',
  },
  {
    q: 'What is the best way to reach you?',
    a: 'Email info@codenavllc.com. We usually reply within a day and will tell you honestly whether we are the right fit.',
  },
];

const Contact = () => {
  usePageTitle('Contact');

  return (
    <div className="contact-ed">
      {/* Hero */}
      <section className="section section--navy contact-hero-ed">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="display display--hero contact-hero-ed__title">
            Tell us what you're building. Or what you need tested.
          </h1>
          <p className="lead">
            Send a note with a little context and we'll get back to you, usually within a day.
          </p>
        </div>
      </section>

      {/* Reach us */}
      <section className="section section--paper">
        <div className="container">
          <span className="eyebrow"><span className="num">01</span> Reach us</span>
          <a className="contact-email" href="mailto:info@codenavllc.com">
            <Mail size={22} aria-hidden="true" /> info@codenavllc.com
          </a>
          <dl className="contact-meta">
            <div className="contact-meta__row">
              <dt>Location</dt>
              <dd>Remote-first, working with clients worldwide.</dd>
            </div>
            <div className="contact-meta__row">
              <dt>Response</dt>
              <dd>Typically within one business day.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--navy">
        <div className="container">
          <span className="eyebrow"><span className="num">02</span> Questions</span>
          <h2 className="display display--section section-head">Frequently asked</h2>
          <dl className="faq-ed">
            {faqs.map((f) => (
              <div key={f.q} className="faq-ed__row">
                <dt className="faq-ed__q">{f.q}</dt>
                <dd className="faq-ed__a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
};

export default Contact;
