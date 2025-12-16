import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((other, j) => {
          if (i === j) return;
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* Animated background elements */}
        <div className="hero-grid-bg"></div>
        <div className="hero-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="scan-line"></div>
        <canvas ref={canvasRef} className="hero-canvas"></canvas>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>AI-Powered Solutions & Security</span>
            </div>
            
            <h1 className="hero-title">
              Next-Generation <span className="highlight">AI Solutions</span><br />
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
            <div className="card service-card service-card-cyan">
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

            <div className="card service-card service-card-red">
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

            <div className="card service-card service-card-green">
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

            <div className="card service-card service-card-purple">
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
      <section className="section why-choose-us">
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
