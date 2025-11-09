import React from 'react';
import './About.css';
import { FiCheck, FiUsers, FiBriefcase, FiTarget, FiStar } from 'react-icons/fi';

const About = () => {
  return (
    <section className="about-page">
      
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Your Partner in <span className="hero-gradient">Digital Growth</span>
          </h1>
          <p className="hero-subtitle">
            With a team of skilled experts and a passion for innovation, we help businesses scale their presence, connect deeply with customers, and build timeless brands.
          </p>
          <button className="btn btn-primary hero-cta">Explore Our Services</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee48"
            alt="Teamwork Illustration"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats-section">
        <div className="stats-card">
          <FiUsers className="stats-icon" />
          <h3>500+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="stats-card">
          <FiBriefcase className="stats-icon" />
          <h3>950+</h3>
          <p>Successful Projects</p>
        </div>
        <div className="stats-card">
          <FiTarget className="stats-icon" />
          <h3>10+ Years</h3>
          <p>Experience In Industry</p>
        </div>
        <div className="stats-card">
          <FiStar className="stats-icon" />
          <h3>4.9/5</h3>
          <p>Client Rating</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <div className="mv-card mission">
          <h2 className="mv-title">Our Mission</h2>
          <p>
            To empower businesses with cutting-edge technology and digital experiences that inspire growth, create value, and leave a lasting impact.
          </p>
          <ul className="mv-list">
            <li><FiCheck /> Delivering measurable results</li>
            <li><FiCheck /> Building timeless user experiences</li>
            <li><FiCheck /> Driving brand-first solutions</li>
          </ul>
        </div>
        <div className="mv-card vision">
          <h2 className="mv-title">Our Vision</h2>
          <p>
            To lead the global movement toward smarter, more scalable, and future-ready digital transformation for brands of all sizes.
          </p>
          <ul className="mv-list">
            <li><FiCheck /> Transforming industries digitally</li>
            <li><FiCheck /> Embracing innovation and quality</li>
            <li><FiCheck /> Creating a legacy of excellence</li>
          </ul>
        </div>
      </div>

      {/* Core Values */}
      <div className="core-values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We believe in complete transparency, trust, and doing what's right – every time.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We push the boundaries with modern, creative tech that sets your brand apart.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>Together, we achieve more. We involve you every step of the way.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We aim for pixel-perfect delivery with measurable outcomes and zero compromises.</p>
          </div>
        </div>
      </div>

      {/* Team Intro Placeholder */}
      <div className="team-placeholder">
        <h2 className="section-title">Meet Our Awesome Team</h2>
        <p>⚠️ Coming Soon: We’re adding profiles of our senior leaders, strategists, UI/UX experts, and development ninjas. Stay tuned!</p>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Ready to Build a Digital Experience That Converts?</h2>
        <p>Partner with us today and take your business to new heights with world-class development, branding, and marketing strategies.</p>
        <div className="cta-actions">
          <button className="btn btn-primary">Get in Touch</button>
          <button className="btn btn-secondary">View Case Studies</button>
        </div>
      </div>

    </section>
  );
};

export default About;
