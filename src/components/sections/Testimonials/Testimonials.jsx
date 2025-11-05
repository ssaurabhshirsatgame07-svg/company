import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMessageCircle } from 'react-icons/fi'; // Changed FiQuote to FiMessageCircle

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, Fashion Boutique",
      company: "StyleTrend",
      image: "/testimonials/sarah.jpg",
      rating: 5,
      text: "Senka Digital transformed our online presence. Our Shopify store saw a 200% increase in sales within the first month. Their attention to detail and understanding of e-commerce is exceptional.",
      project: "E-Commerce Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "/testimonials/michael.jpg",
      rating: 5,
      text: "The mobile app developed by Senka Digital exceeded our expectations. User engagement increased by 150% and the app has maintained a 4.9-star rating on both app stores.",
      project: "Mobile App Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "HealthWell Clinic",
      image: "/testimonials/emily.jpg",
      rating: 5,
      text: "Working with Senka Digital was a game-changer for our clinic. Their website design and SEO strategy helped us reach 3x more patients in just 6 months.",
      project: "Web Development & SEO"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "E-commerce Manager",
      company: "HomeEssentials",
      image: "/testimonials/david.jpg",
      rating: 5,
      text: "The digital marketing campaign by Senka Digital delivered incredible ROI. We achieved a 300% increase in online sales while reducing our customer acquisition cost by 40%.",
      project: "Digital Marketing"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Product Manager",
      company: "FinTech Startup",
      image: "/testimonials/lisa.jpg",
      rating: 5,
      text: "Senka Digital's technical expertise and project management skills are outstanding. They delivered our complex web application ahead of schedule and under budget.",
      project: "Web Application"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Business Owner",
      company: "Local Restaurant Chain",
      image: "/testimonials/robert.jpg",
      rating: 5,
      text: "The social media management service completely transformed our online engagement. Our follower growth increased by 500% and we're now the top-rated restaurant in our area.",
      project: "Social Media Management"
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '250+', label: 'Projects Completed' },
    { number: '50+', label: '5-Star Reviews' },
    { number: '3x', label: 'Average Client Growth' }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            What our clients say about our services
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="testimonial-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="testimonial-header">
                <FiMessageCircle className="quote-icon" /> {/* Changed from FiQuote to FiMessageCircle */}
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="star" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <div className="image-placeholder">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <p className="company">{testimonial.company}</p>
                  <span className="project-tag">{testimonial.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="trust-indicators"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Trusted By Industry Leaders</h3>
          <div className="trust-logos">
            <div className="trust-logo">TechSolutions Inc.</div>
            <div className="trust-logo">StyleTrend</div>
            <div className="trust-logo">HealthWell</div>
            <div className="trust-logo">HomeEssentials</div>
            <div className="trust-logo">FinTech Startup</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;