import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiSun, FiMoon } from 'react-icons/fi';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesDropdownOpen, setDesktopServicesDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);

  const navigation = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Ecommerce Solutions', path: '/services/ecommerce' },
        { name: 'Mobile Apps', path: '/services/mobile-apps' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Handle scrolling and sticky header effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setDesktopServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', closeDropdowns);
    return () => document.removeEventListener('mousedown', closeDropdowns);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            SenkaDigital
          </motion.h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            {navigation.map((item, idx) => (
              <li key={idx} ref={item.name === 'Services' ? servicesRef : null}>
                {item.dropdown ? (
                  <button
                    className={`nav-link ${desktopServicesDropdownOpen ? 'active' : ''}`}
                    onClick={() => setDesktopServicesDropdownOpen(!desktopServicesDropdownOpen)}
                  >
                    {item.name} {desktopServicesDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {desktopServicesDropdownOpen && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {item.dropdown.map((sub, idx2) => (
                          <Link key={idx2} to={sub.path} className="dropdown-item">
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <Link to="/contact" className="btn btn-primary desktop-only">
            Let's Talk
          </Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            <ul>
              {navigation.map((item, idx) => (
                <li key={idx}>
                  {item.dropdown ? (
                    <button
                      className="mobile-nav-link"
                      onClick={() => setMobileServicesDropdownOpen(!mobileServicesDropdownOpen)}
                    >
                      {item.name} {mobileServicesDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-nav-link"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.dropdown && mobileServicesDropdownOpen && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((sub, idx2) => (
                        <Link
                          key={idx2}
                          to={sub.path}
                          className="mobile-dropdown-item"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link to="/contact" className="btn btn-primary full-width" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
