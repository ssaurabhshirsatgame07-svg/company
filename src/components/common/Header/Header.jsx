import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiSun, 
  FiMoon,
  FiChevronDown 
} from 'react-icons/fi';
import { useApp } from '../../../context/AppContext';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { state, dispatch } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'E-Commerce', path: '/services/ecommerce' },
        { name: 'Mobile Apps', path: '/services/mobile-apps' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'SEO', path: '/services/seo' },
        { name: 'Social Media', path: '/services/social-media' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''} ${state.darkMode ? 'dark' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">
              <h2>Senka <br></br>Digital</h2>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  {item.dropdown ? (
                    <div 
                      className="nav-link dropdown-trigger"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown />
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div 
                            className="dropdown-menu"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            {item.dropdown.map((service) => (
                              <Link 
                                key={service.name} 
                                to={service.path}
                                className="dropdown-item"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
            >
              {state.darkMode ? <FiSun /> : <FiMoon />}
            </button>
            
            <button className="btn btn-primary">
              Get Quote
            </button>

            <button 
              className="mobile-menu-toggle"
              onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
            >
              {state.mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {state.mobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
            >
              <ul className="mobile-nav-list">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;