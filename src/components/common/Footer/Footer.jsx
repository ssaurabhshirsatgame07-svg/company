import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Shopify Development',
    'WordPress Development',
    'Website Development',
    'Mobile App Development',
    'SEO Optimization',
    'Digital Marketing',
    'Social Media Management'
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: '#' },
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiInstagram />, url: '#' },
    { icon: <FiLinkedin />, url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-logo">Senka Digital</h3>
            <p className="footer-description">
              We provide comprehensive digital solutions to transform your business 
              and elevate your online presence to new heights.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FiMail />
                <span>support@senkagmail.com</span>
              </div>
              <div className="contact-item">
                <FiPhone />
                <span>+19 8888736376</span>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>Banner , Pune</span>
              </div>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
         {/* Services */}
<motion.div 
  className="footer-section"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <h4>Our Services</h4>
  <ul className="footer-links">
    <li><Link to="/services/ecommerce">Shopify Development</Link></li>
    <li><Link to="/services/wordpress">WordPress Development</Link></li>
    <li><Link to="/services/web-development">Website Development</Link></li>
    <li><Link to="/services/mobile-apps">Mobile App Development</Link></li>
    <li><Link to="/services/seo">SEO Optimization</Link></li>
    <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
    <li><Link to="/services/social-media">Social Media Management</Link></li>
  </ul>
</motion.div>


          {/* Newsletter */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on our latest services and offers.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Senka Digital. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;