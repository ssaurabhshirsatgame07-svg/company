import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Fashion Store",
      category: "ecommerce",
      image: "/portfolio/fashion-store.jpg",
      description: "Complete Shopify store for fashion brand with custom features",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Custom Theme", "Product Filter", "Quick View", "Mobile Optimized"]
    },
    {
      id: 2,
      title: "Corporate Business Website",
      category: "web",
      image: "/portfolio/corporate-site.jpg",
      description: "Professional website for financial services company",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Responsive Design", "CMS Integration", "Contact Forms", "SEO Optimized"]
    },
    {
      id: 3,
      title: "Food Delivery Mobile App",
      category: "mobile",
      image: "/portfolio/food-app.jpg",
      description: "Cross-platform food ordering and delivery application",
      technologies: ["React Native", "Firebase", "Node.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time Tracking", "Payment Integration", "Push Notifications", "User Reviews"]
    },
    {
      id: 4,
      title: "Digital Marketing Platform",
      category: "web",
      image: "/portfolio/marketing-platform.jpg",
      description: "SaaS platform for digital marketing agencies",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Analytics Dashboard", "Campaign Management", "Client Portal", "Automated Reports"]
    },
    {
      id: 5,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "/portfolio/healthcare-app.jpg",
      description: "Patient management and telemedicine application",
      technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Video Consultations", "Appointment Booking", "Health Records", "Prescription Management"]
    },
    {
      id: 6,
      title: "Real Estate Portal",
      category: "web",
      image: "/portfolio/real-estate.jpg",
      description: "Comprehensive property listing and management platform",
      technologies: ["React", "Python", "PostgreSQL", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Property Search", "Virtual Tours", "Agent Profiles", "Lead Management"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-Commerce' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Check out our latest projects and success stories
          </p>
        </motion.div>

        {/* Portfolio Filter */}
        <motion.div 
          className="portfolio-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <FiFilter /> {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio-image">
                <div className="image-placeholder">
                  <span>{item.title}</span>
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <a href={item.liveUrl} className="action-btn">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={item.githubUrl} className="action-btn">
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                
                <div className="portfolio-technologies">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="portfolio-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's create something amazing together</p>
          <button className="btn btn-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
