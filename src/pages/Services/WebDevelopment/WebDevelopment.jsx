import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../../components/sections/ServiceLayout/ServiceLayout';
import { 
  FiCode, 
  FiLayout, 
  FiSmartphone, 
  FiZap,
  FiShield,
  FiGlobe
} from 'react-icons/fi';

const WebDevelopment = () => {
  const serviceData = {
    title: "Web Development",
    subtitle: "Custom, responsive, and high-performance websites",
    description: "We create stunning, functional websites that drive results. From simple landing pages to complex web applications, our development team delivers exceptional digital experiences.",
    features: [
      {
        icon: <FiCode />,
        title: "Custom Development",
        description: "Tailored solutions built from scratch to meet your specific business requirements"
      },
      {
        icon: <FiLayout />,
        title: "Responsive Design",
        description: "Websites that look and work perfectly on all devices and screen sizes"
      },
      {
        icon: <FiZap />,
        title: "High Performance",
        description: "Lightning-fast loading times and optimized user experiences"
      },
      {
        icon: <FiShield />,
        title: "Security First",
        description: "Enterprise-grade security measures to protect your data and users"
      },
      {
        icon: <FiGlobe />,
        title: "SEO Optimized",
        description: "Built with search engine optimization best practices from day one"
      },
      {
        icon: <FiSmartphone />,
        title: "Mobile First",
        description: "Priority on mobile experience with progressive enhancement for larger screens"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Starter",
          price: "$1,499",
          description: "Perfect for small businesses and startups",
          features: [
            "5-7 Page Website",
            "Responsive Design",
            "Basic SEO Setup",
            "Contact Form",
            "1 Month Support",
            "2 Revisions"
          ]
        },
        {
          name: "Business",
          price: "$2,999",
          description: "Ideal for growing businesses",
          popular: true,
          features: [
            "10-15 Page Website",
            "Custom Design",
            "Advanced SEO",
            "CMS Integration",
            "3 Months Support",
            "5 Revisions",
            "E-commerce Ready",
            "Performance Optimization"
          ]
        },
        {
          name: "Enterprise",
          price: "$5,999+",
          description: "For large-scale applications",
          features: [
            "20+ Page Website",
            "Full Customization",
            "E-commerce Integration",
            "Advanced Features",
            "6 Months Support",
            "Unlimited Revisions",
            "Priority Support",
            "Training Sessions"
          ]
        }
      ]
    },
    process: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
        duration: "1-2 weeks"
      },
      {
        title: "Design & Prototyping",
        description: "Our designers create wireframes and mockups for your approval before development begins.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Our developers bring your design to life with clean, efficient code and modern technologies.",
        duration: "3-6 weeks"
      },
      {
        title: "Testing & Quality Assurance",
        description: "Rigorous testing across devices and browsers to ensure flawless performance.",
        duration: "1-2 weeks"
      },
      {
        title: "Launch & Support",
        description: "We deploy your website and provide ongoing support and maintenance services.",
        duration: "Ongoing"
      }
    ],
    faq: [
      {
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies including React, Next.js, Vue.js, Node.js, and various CMS platforms like WordPress and Shopify depending on project requirements."
      },
      {
        question: "How long does a typical web development project take?",
        answer: "Project timelines vary based on complexity. A basic website takes 4-6 weeks, while complex applications can take 8-12 weeks or more."
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer: "Yes, we offer various maintenance packages including security updates, performance monitoring, and content updates."
      },
      {
        question: "Can you work with our existing design or branding?",
        answer: "Absolutely! We can work with your existing design assets or create new ones that align with your brand identity."
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceLayout {...serviceData} />
    </motion.div>
  );
};

export default WebDevelopment;