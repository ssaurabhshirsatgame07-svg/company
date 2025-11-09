// src/components/sections/Growth/GrowthSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiPieChart,
  FiTarget,
  FiDollarSign,
  FiRepeat,
  FiCompass
} from 'react-icons/fi';
import './GrowthSection.css';

const growthMetrics = [
  {
    icon: <FiTrendingUp />,
    title: "Increase in Traffic",
    value: "300%+",
    description: "Boost your brand awareness and organic traffic with proven SEO and content strategies."
  },
  {
    icon: <FiUsers />,
    title: "Customer Acquisition",
    value: "5x",
    description: "Enhance engagement and attract new customers with targeted campaigns and UX improvements."
  },
  {
    icon: <FiBarChart2 />,
    title: "Conversion Rate Growth",
    value: "150%+",
    description: "We build conversion-optimized funnels and landing pages to grow your bottom line."
  },
  {
    icon: <FiPieChart />,
    title: "Revenue Increase",
    value: "2x - 4x",
    description: "Through CRO-focused design and analytics-driven decisions, we amplify your ROI."
  },
  {
    icon: <FiTarget />,
    title: "Brand Targeting",
    value: "98% Accuracy",
    description: "Precise audience segmentation helps your brand speak to the right customers."
  },
  {
    icon: <FiDollarSign />,
    title: "Reduced CAC",
    value: "-40%",
    description: "Optimize spend and reduce customer acquisition cost with full-funnel attribution."
  },
  {
    icon: <FiRepeat />,
    title: "Repeat Customers",
    value: "70%+",
    description: "Retention-focused ecosystems and loyalty loops increase your repeat business significantly."
  },
  {
    icon: <FiCompass />,
    title: "Funnel Optimization",
    value: "3.2x Faster",
    description: "Streamlined onboarding and high-performing UX dramatically improve your time-to-value."
  }
];

const GrowthSection = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        <motion.h2
          className="growth-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your <span className="gradient-text">Growth Engine</span> Partner
        </motion.h2>

        <motion.p
          className="growth-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We create tailored, end-to-end experiences that drive growth. Every product we build is engineered to scale your brand, optimize conversions, and unlock exponential potential.
        </motion.p>

        <div className="growth-metrics">
          {growthMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              className="growth-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="growth-icon">{metric.icon}</div>
              <h3>{metric.title}</h3>
              <span className="growth-value">{metric.value}</span>
              <p>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
