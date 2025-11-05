import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, 
  FiShoppingCart, 
  FiSmartphone, 
  FiTrendingUp,
  FiSearch,
  FiDollarSign,
  FiUsers,
  FiFilter,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiStar,
  FiAward,
  FiZap,
  FiShield,
  FiGlobe,
  FiMail,
  FiVideo
} from 'react-icons/fi';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  // Updated categories with correct counts - Marketing: 4, Development: 4
  const categories = [
    { id: 'all', name: 'All Services', icon: <FiFilter />, count: 8 },
    { id: 'development', name: 'Development', icon: <FiCode />, count: 4 },
    { id: 'marketing', name: 'Marketing', icon: <FiTrendingUp />, count: 4 }
  ];

  // Updated services - Shopify under Development, exactly 4 each
  const services = [
    // DEVELOPMENT SERVICES - 4 items (including Shopify)
    {
      id: 1,
      title: "Shopify Development",
      description: "Complete e-commerce solutions with custom Shopify stores, themes, and app integrations that drive sales and conversions.",
      icon: <FiShoppingCart />,
      category: 'development',
      features: ['Custom Theme Development', 'App Integration', 'Payment Gateway Setup', 'SEO Optimization', 'Mobile-First Design', 'Inventory Management'],
      price: '$999 - $4,999',
      duration: '4-6 weeks',
      popular: true,
      badge: 'Most Popular',
      highlights: ['99% Uptime', '24/7 Support', 'Conversion Optimized'],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      rating: 4.9
    },
    {
      id: 2,
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks for scalability, performance, and exceptional user experience.",
      icon: <FiCode />,
      category: 'development',
      features: ['React/Next.js Development', 'API Integration', 'Database Design', 'Cloud Deployment', 'Performance Optimization', 'Security Implementation'],
      price: '$2,500 - $15,000',
      duration: '6-12 weeks',
      popular: true,
      badge: 'Full Stack devplopment',
      highlights: ['Scalable Architecture', 'Cloud Ready', 'API Integration'],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      rating: 4.8
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android with native performance and seamless user experience.",
      icon: <FiSmartphone />,
      category: 'development',
      features: ['React Native/Flutter', 'UI/UX Design', 'App Store Deployment', 'Push Notifications', 'Offline Support', 'API Integration'],
      price: '$3,000 - $20,000',
      duration: '8-16 weeks',
      popular: false,
      badge: 'Cross-Platform',
      highlights: ['Native Performance', 'Offline Support', 'Push Notifications'],
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux'],
      rating: 4.7
    },
    {
      id: 4,
      title: "WordPress Development",
      description: "Professional WordPress websites with custom functionality and seamless CMS integration for easy content management.",
      icon: <FiGlobe />,
      category: 'development',
      features: ['Custom Theme Development', 'Plugin Development', 'WooCommerce Setup', 'Security Hardening', 'Performance Optimization', 'SEO Ready'],
      price: '$799 - $5,000',
      duration: '3-6 weeks',
      popular: false,
      badge: 'Fast Delivery',
      highlights: ['SEO Optimized', 'Fast Loading', 'Easy to Manage'],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
      rating: 4.8
    },

    // MARKETING SERVICES - 4 items
    {
      id: 5,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to boost your search rankings and drive qualified organic traffic to your website.",
      icon: <FiSearch />,
      category: 'marketing',
      features: ['On-Page SEO', 'Technical SEO', 'Content Strategy', 'Rank Tracking', 'Competitor Analysis', 'Monthly Reporting'],
      price: '$500 - $2,500/mo',
      duration: 'Ongoing',
      popular: true,
      badge: 'Top Results',
      highlights: ['Keyword Research', 'Competitor Analysis', 'Monthly Reports'],
      technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush'],
      rating: 4.9
    },
    {
      id: 6,
      title: "Google & Meta Ads",
      description: "Targeted advertising campaigns on Google and social media platforms for maximum ROI and conversion rates.",
      icon: <FiDollarSign />,
      category: 'marketing',
      features: ['PPC Management', 'Ad Creation & Testing', 'A/B Testing', 'ROI Tracking', 'Audience Targeting', 'Conversion Optimization'],
      price: '$300 - $2,000/mo',
      duration: 'Ongoing',
      popular: true,
      badge: 'High ROI',
      highlights: ['Conversion Tracking', 'Audience Targeting', 'Budget Optimization'],
      technologies: ['Google Ads', 'Meta Ads', 'Analytics', 'Tag Manager'],
      rating: 4.8
    },
    {
      id: 7,
      title: "Social Media Marketing",
      description: "Strategic social media management and advertising to build brand awareness and engage your target audience.",
      icon: <FiUsers />,
      category: 'marketing',
      features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Outreach', 'Analytics Reporting', 'Brand Monitoring'],
      price: '$600 - $2,500/mo',
      duration: 'Ongoing',
      popular: false,
      badge: 'Engagement Focused',
      highlights: ['Content Creation', 'Audience Growth', 'Brand Building'],
      technologies: ['Social Platforms', 'Scheduling Tools', 'Analytics', 'Design Tools'],
      rating: 4.7
    },
    {
      id: 8,
      title: "Email Marketing",
      description: "Convert subscribers into customers with strategic email campaigns, automation, and personalized content.",
      icon: <FiMail />,
      category: 'marketing',
      features: ['Email Strategy', 'Automation Setup', 'List Management', 'A/B Testing', 'Analytics & Reporting', 'Template Design'],
      price: '$400 - $1,800/mo',
      duration: 'Ongoing',
      popular: false,
      badge: 'High Conversion',
      highlights: ['Automation Flows', 'Personalization', 'Performance Tracking'],
      technologies: ['Mailchimp', 'Klaviyo', 'HubSpot', 'ActiveCampaign'],
      rating: 4.6
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Verify counts
  const developmentCount = services.filter(s => s.category === 'development').length;
  const marketingCount = services.filter(s => s.category === 'marketing').length;

  console.log(`Development: ${developmentCount}, Marketing: ${marketingCount}`); // Should be 4 each

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="header-content">
            <div className="badge">
              <FiAward />
              <span>Our Services</span>
            </div>
            <h2 className="section-title">Transform Your Digital Presence</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions designed to drive growth, increase visibility, 
              and deliver measurable results for your business
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="section-label">
            <FiFilter />
            <span>Browse Services</span>
          </div>
          <h3 className="section-heading">Find Your Perfect Solution</h3>
          
          <div className="category-filters">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="filter-content">
                  <div className="filter-icon">{category.icon}</div>
                  <div className="filter-text">
                    <span className="filter-name">{category.name}</span>
                    <span className="filter-count">{category.count} services</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid-container"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="services-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`service-card ${service.popular ? 'popular' : ''}`}
                  data-category={service.category}
                  data-service={service.title.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  layout
                >
                  {/* Card Badge */}
                  {service.badge && (
                    <div className="card-badge">
                      <FiAward />
                      <span>{service.badge}</span>
                    </div>
                  )}

                  {/* Service Header */}
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      {service.icon}
                    </div>
                    <div className="service-meta-info">
                      <span className={`service-category-badge ${service.category}`}>
                        {service.category}
                      </span>
                      <div className="service-rating">
                        <FiStar className="star filled" />
                        <span>{service.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="service-card-content">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-description">{service.description}</p>
                    
                    {/* Technologies */}
                    <div className="service-technologies">
                      <div className="technologies-label">Technologies & Tools:</div>
                      <div className="tech-tags">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="service-features-list">
                      <h4 className="features-title">What's Included:</h4>
                      <ul>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <FiCheck className="feature-check" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="service-highlights">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <FiZap className="highlight-icon" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Footer */}
                  <div className="service-card-footer">
                    <div className="pricing-info">
                      <div className="price-range">{service.price}</div>
                      <div className="duration-info">
                        <FiClock />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <motion.button 
                      className={`cta-button ${service.popular ? 'primary' : 'secondary'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Get Started</span>
                      <FiArrowRight />
                    </motion.button>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div 
                        className="service-hover-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="overlay-content">
                          <FiShield className="overlay-icon" />
                          <h4>Ready to Start Your Project?</h4>
                          <p>Get a free consultation and detailed project estimate</p>
                          <motion.button 
                            className="overlay-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Free Consultation
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="services-bottom-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cta-background">
            <div className="cta-content-wrapper">
              <div className="cta-text-content">
                <h3>Need a Custom Solution?</h3>
                <p>We specialize in creating tailored digital solutions that perfectly match your business requirements and goals.</p>
                <div className="cta-features">
                  <div className="cta-feature">
                    <FiCheck />
                    <span>Free Project Consultation</span>
                  </div>
                  <div className="cta-feature">
                    <FiCheck />
                    <span>Detailed Proposal & Timeline</span>
                  </div>
                  <div className="cta-feature">
                    <FiCheck />
                    <span>No Obligation Quote</span>
                  </div>
                </div>
              </div>
              <div className="cta-action-buttons">
                <motion.button 
                  className="cta-btn primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiVideo />
                  <span>Get Free Consultation</span>
                </motion.button>
                <motion.button 
                  className="cta-btn secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Case Studies</span>
                  <FiArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;