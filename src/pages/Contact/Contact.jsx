import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">

      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="contact-title">Let’s Create Something Great Together</h1>
        <p className="contact-subtitle">
          Have a question, proposal, or just want to say hello? We’d love to hear from you!
        </p>
      </div>

      {/* Contact Layout */}
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-heading">Get in Touch</h2>
          <p>We are always open to discuss your project and talk about new ideas.</p>

          <div className="info-item">
            <FiMail className="info-icon" />
            <div>
              <h3>Email us</h3>
              <p>support@senkadigital.com</p>
            </div>
          </div>

          <div className="info-item">
            <FiPhone className="info-icon" />
            <div>
              <h3>Call us</h3>
              <p>+91 98765-43210</p>
            </div>
          </div>

          <div className="info-item">
            <FiMapPin className="info-icon" />
            <div>
              <h3>Visit us</h3>
              <p>Senka Digital, Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea placeholder="Tell us about your project" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            <FiSend className="send-icon" /> Send Message
          </button>
        </form>
      </div>

      {/* CTA Section */}
      <div className="contact-cta">
        <h2>Need A Custom Digital Solution?</h2>
        <p>We’re here to help bring your ideas to life with a powerful strategy and design.</p>
        <button className="btn btn-secondary">Book a Free Consultation</button>
      </div>
    </section>
  );
};

export default Contact;
