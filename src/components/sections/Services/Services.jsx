import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, 
  FiShoppingCart, 
  FiSmartphone, 
  FiTrendingUp,
  FiSearch,
  FiDollarSign,
  FiUsers,
  FiMail,
  FiClock,
  FiStar,
  FiArrowRight,
  FiAward,
    FiCheck ,
  FiZap,
  FiShield
} from 'react-icons/fi';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: <FiTrendingUp />, count: 8 },
    { id: 'development', name: 'Development', icon: <FiCode />, count: 4 },
    { id: 'marketing', name: 'Marketing', icon: <FiTrendingUp />, count: 4 }
  ];

  const services = [
    {
      id: 1,
      title: "Shopify Development",
      description: "Complete e-commerce solutions with custom Shopify stores, themes, and app integrations.",
      icon: <FiShoppingCart />,
      category: 'development',
      features: ['Custom Designs', 'Mobile Friendly', 'SEO Optimized', 'App Integrations'],
      price: '$999 - $4,999',
      duration: '4-6 weeks',
      popular: true,
      badge: 'Most Popular',
      highlights: ['24/7 Support', 'Conversion Optimized'],
      technologies: ['Shopify', 'Liquid', 'JavaScript'],
      rating: 4.9,
      link: '/services/shopify-development'
    },
    {
      id: 2,
      title: "Web App Development",
      description: "Modern, scalable, and high-performance web applications.",
      icon: <FiCode />,
      category: 'development',
      features: ['React/Next.js', 'API Integration', 'Responsive UI'],
      price: '$2,500 - $15,000',
      duration: '6-12 weeks',
      popular: false,
      badge: 'Full Stack',
      highlights: ['Cloud Hosted', 'Secure'],
      technologies: ['React', 'Node.js'],
      rating: 4.8,
      link: '/services/web-development'
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Custom mobile apps with smooth user experience on iOS and Android.",
      icon: <FiSmartphone />,
      category: 'development',
      features: ['Cross-Platform', 'Push Notifications', 'Offline Support'],
      price: '$3,000 - $20,000',
      duration: '8-16 weeks',
      popular: false,
      badge: 'Cross-Platform',
      highlights: ['Offline Support', 'Native Performance'],
      technologies: ['React Native', 'Flutter'],
      rating: 4.7,
      link: '/services/mobile-app-development'
    },
    {
      id: 4,
      title: "WordPress Development",
      description: "Fully customized and responsive WordPress websites for your brand.",
      icon: <FiCode />,
      category: 'development',
      features: ['Custom Themes', 'Plugins', 'WooCommerce'],
      price: '$799 - $5,000',
      duration: '3-6 weeks',
      popular: false,
      badge: 'Fast Delivery',
      highlights: ['SEO Ready', 'Easy to Manage'],
      technologies: ['PHP', 'WordPress'],
      rating: 4.8,
      link: '/services/wordpress-development'
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Boost your rankings and traffic with proven SEO strategies.",
      icon: <FiSearch />,
      category: 'marketing',
      features: ['On-Page SEO', 'Technical SEO', 'Content Strategy'],
      price: '$500 - $2,500/mo',
      duration: 'Ongoing',
      popular: true,
      badge: 'Top Results',
      highlights: ['Keyword Ranking', 'Monthly Reports'],
      technologies: ['Google Analytics', 'Ahrefs'],
      rating: 4.9,
      link: '/services/seo-optimization'
    },
    {
      id: 6,
      title: "Google & Meta Ads",
      description: "Data-backed advertising campaigns for ROI-focused results.",
      icon: <FiDollarSign />,
      category: 'marketing',
      features: ['PPC Setup', 'A/B Testing', 'Conversion Tracking'],
      price: '$300 - $2,000/mo',
      duration: 'Ongoing',
      popular: true,
      badge: 'High ROI',
      highlights: ['Audience Targeting', 'Budget Optimization'],
      technologies: ['Google Ads', 'Meta Tags'],
      rating: 4.8,
      link: '/services/google-meta-ads'
    },
    {
      id: 7,
      title: "Social Media Marketing",
      description: "Grow your brand with creative and consistent social media presence.",
      icon: <FiUsers />,
      category: 'marketing',
      features: ['Content Strategy', 'Ads Management', 'Influencer Outreach'],
      price: '$600 - $2,500/mo',
      duration: 'Ongoing',
      popular: false,
      badge: 'Engagement Focused',
      highlights: ['Brand Building', 'Social Ads'],
      technologies: ['Instagram', 'Facebook'],
      rating: 4.7,
      link: '/services/social-media-marketing'
    },
    {
      id: 8,
      title: "Email Marketing",
      description: "Automated email flows to engage and convert your audience.",
      icon: <FiMail />,
      category: 'marketing',
      features: ['Automation', 'Personalized Campaigns', 'A/B Testing'],
      price: '$400 - $1,800/mo',
      duration: 'Ongoing',
      popular: false,
      badge: 'High Conversion',
      highlights: ['Segmentation', 'Performance Reports'],
      technologies: ['Mailchimp', 'Klaviyo'],
      rating: 4.6,
      link: '/services/email-marketing'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="services-section">
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
              Comprehensive solutions designed to grow your business online.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="category-filters">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.icon}
              <span>{category.name} ({category.count})</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className={`service-card ${service.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                layout
              >
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

                  {/* Features */}
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="service-card-footer">
                  <div className="pricing-info">
                    <div className="price-range">{service.price}</div>
                    <div className="duration-info">
                      <FiClock />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className={`cta-button ${service.popular ? 'primary' : 'secondary'}`}
                  >
                    <span>Get Started</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
