import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../../components/sections/ServiceLayout/ServiceLayout';
import { 
  FiShoppingCart, 
  FiCreditCard, 
  FiTruck, 
  FiBarChart2,
  FiUsers,
  FiSettings
} from 'react-icons/fi';

const Ecommerce = () => {
  const serviceData = {
    title: "E-Commerce Development",
    subtitle: "Build your online store and start selling today",
    description: "We create powerful e-commerce solutions that convert visitors into customers. From Shopify stores to custom platforms, we build online stores that drive sales and growth.",
    features: [
      {
        icon: <FiShoppingCart />,
        title: "Shopify Development",
        description: "Custom Shopify stores with unique themes and seamless app integrations"
      },
      {
        icon: <FiCreditCard />,
        title: "Payment Integration",
        description: "Secure payment gateways including Stripe, PayPal, and custom solutions"
      },
      {
        icon: <FiTruck />,
        title: "Inventory Management",
        description: "Advanced inventory tracking and management systems"
      },
      {
        icon: <FiBarChart2 />,
        title: "Analytics & Reporting",
        description: "Comprehensive sales tracking and business intelligence dashboards"
      },
      {
        icon: <FiUsers />,
        title: "Customer Management",
        description: "CRM integration and customer relationship management tools"
      },
      {
        icon: <FiSettings />,
        title: "Custom Features",
        description: "Tailored functionality to meet your specific business needs"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Basic Store",
          price: "$2,499",
          description: "Perfect for starting your online business",
          features: [
            "Shopify Setup",
            "Custom Theme",
            "Product Catalog (up to 50)",
            "Payment Integration",
            "Basic SEO",
            "2 Months Support"
          ]
        },
        {
          name: "Advanced Store",
          price: "$4,999",
          description: "For growing e-commerce businesses",
          popular: true,
          features: [
            "Custom Shopify Development",
            "Advanced Features",
            "Product Catalog (up to 500)",
            "Multiple Payment Methods",
            "Inventory Management",
            "Advanced SEO",
            "4 Months Support"
          ]
        },
        {
          name: "Enterprise Solution",
          price: "$9,999+",
          description: "For large-scale e-commerce operations",
          features: [
            "Custom Platform",
            "Unlimited Products",
            "Multi-vendor Support",
            "Custom ERP Integration",
            "Advanced Analytics",
            "Dedicated Support",
            "Training & Documentation"
          ]
        }
      ]
    },
    process: [
      {
        title: "Strategy & Planning",
        description: "We analyze your products, target market, and business goals to create an e-commerce strategy.",
        duration: "1-2 weeks"
      },
      {
        title: "Platform Selection",
        description: "We help choose the right e-commerce platform based on your specific needs and budget.",
        duration: "1 week"
      },
      {
        title: "Design & User Experience",
        description: "Creating intuitive shopping experiences that maximize conversions and customer satisfaction.",
        duration: "2-3 weeks"
      },
      {
        title: "Development & Integration",
        description: "Building your store with all necessary features and third-party integrations.",
        duration: "4-6 weeks"
      },
      {
        title: "Testing & Launch",
        description: "Thorough testing of all functionality before going live with your new store.",
        duration: "1-2 weeks"
      }
    ],
    faq: [
      {
        question: "Which e-commerce platforms do you work with?",
        answer: "We specialize in Shopify, WooCommerce, Magento, and custom solutions. We'll recommend the best platform for your business."
      },
      {
        question: "Can you migrate my existing store to a new platform?",
        answer: "Yes, we offer complete migration services including data transfer, design adaptation, and SEO preservation."
      },
      {
        question: "Do you provide ongoing maintenance for e-commerce stores?",
        answer: "We offer maintenance packages that include security updates, performance optimization, and feature enhancements."
      },
      {
        question: "How do you handle payment gateway integration?",
        answer: "We integrate secure payment solutions like Stripe, PayPal, Square, and custom merchant accounts with PCI compliance."
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

export default Ecommerce;