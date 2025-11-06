import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiPlay, 
  FiStar, 
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiCheck
} from 'react-icons/fi';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { 
      number: '250+', 
      label: 'Projects Completed',
      icon: <FiAward />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      number: '98%', 
      label: 'Client Satisfaction',
      icon: <FiTrendingUp />,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      number: '50+', 
      label: 'Team Members',
      icon: <FiUsers />,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      number: '24/7', 
      label: 'Support',
      icon: <FiClock />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    // "Custom Web Development",
    // "E-commerce Solutions", 
    // "Mobile Applications",
    // "Digital Marketing",
    // "SEO Optimization",
    // "Social Media Management"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  },  [stats.length]);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // Simulate video play
    setTimeout(() => setIsPlaying(false), 5000);
  };

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
    
{/* <motion.div
  className="hero-badge"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  {/* <FiStar className="badge-icon" /> */}
  {/* <span>Trusted by 500+ Businesses Worldwide</span> */}
{/* </motion.div> */}


            {/* Main Heading */}
            <motion.h1 
              className="hero-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transform Your 
              <span className="title-gradient"> Digital Presence</span> 
              with Expert Solutions
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We provide comprehensive digital services including web development, 
              e-commerce solutions, mobile applications, and digital marketing 
              strategies to elevate your business to new heights.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="features-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <FiCheck className="feature-icon" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button 
                className="btn btn-primary btn-hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <FiArrowRight className="btn-icon" />
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary btn-hero"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: 'white' }}
                onClick={handlePlayDemo}
              >
                <div className="play-button">
                  {isPlaying ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <FiPlay className="btn-icon" />
                  )}
                </div>
              <span style={{ color: 'white' }}>Watch Demo</span>




              </motion.button>
            </motion.div>

            {/* Rating & Trust */}
            <motion.div 
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star filled" />
                ))}
              </div>
              <div className="trust-text">
                <span className="rating-text">Rated 4.9/5</span>
                <span className="divider">•</span>
                <span className="clients-text">by 500+ clients worldwide</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="hero-stats-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Animated Stats */}
            <div className="stats-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStat}
                  className={`stat-card ${stats[currentStat].color}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="stat-icon">
                    {stats[currentStat].icon}
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{stats[currentStat].number}</h3>
                    <p className="stat-label">{stats[currentStat].label}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Stats Indicators */}
              <div className="stats-indicators">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentStat ? 'active' : ''}`}
                    onClick={() => setCurrentStat(index)}
                  />
                ))}
              </div>
            </div>

            {/* All Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-item-icon">{stat.icon}</div>
                  <div className="stat-item-content">
                    <h4>{stat.number}</h4>
                    <p>{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-line">
            <motion.div
              className="scroll-dot"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;