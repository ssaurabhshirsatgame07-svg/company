import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../../components/sections/ServiceLayout/ServiceLayout';
import { 
  FiSmartphone, 
  FiTablet, 
  FiDownload, 
  FiShoppingCart,
  FiUsers,
  FiBarChart2
} from 'react-icons/fi';

const MobileApps = () => {
  const serviceData = {
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile applications",
    description: "We build high-performance mobile apps for iOS and Android that deliver exceptional user experiences and drive business growth.",
    features: [
      {
        icon: <FiSmartphone />,
        title: "iOS & Android Apps",
        description: "Native development for both major mobile platforms"
      },
      {
        icon: <FiTablet />,
        title: "Cross-Platform",
        description: "React Native and Flutter apps for cost-effective solutions"
      },
      {
        icon: <FiDownload />,
        title: "App Store Deployment",
        description: "Complete submission and approval process handling"
      },
      {
        icon: <FiShoppingCart />,
        title: "E-commerce Integration",
        description: "Mobile shopping experiences with secure payments"
      },
      {
        icon: <FiUsers />,
        title: "User-Centric Design",
        description: "Intuitive interfaces optimized for mobile usage"
      },
      {
        icon: <FiBarChart2 />,
        title: "Analytics & Insights",
        description: "Track user behavior and app performance metrics"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Basic App",
          price: "$4,999",
          description: "Simple mobile application with core features",
          features: [
            "Single Platform",
            "Basic Features",
            "App Store Submission",
            "3 Months Support",
            "2 Revisions"
          ]
        },
        {
          name: "Business App",
          price: "$9,999",
          description: "Feature-rich app for growing businesses",
          popular: true,
          features: [
            "Both iOS & Android",
            "Advanced Features",
            "Backend Integration",
            "6 Months Support",
            "5 Revisions",
            "Analytics Dashboard"
          ]
        },
        {
          name: "Enterprise App",
          price: "$19,999+",
          description: "Complex applications for large organizations",
          features: [
            "Multiple Platforms",
            "Custom Backend",
            "Advanced Security",
            "1 Year Support",
            "Unlimited Revisions",
            "Dedicated Team"
          ]
        }
      ]
    },
    process: [
      {
        title: "Strategy & Planning",
        description: "Define app objectives, target audience, and feature requirements.",
        duration: "1-2 weeks"
      },
      {
        title: "UI/UX Design",
        description: "Create intuitive mobile interfaces and user experience flows.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Build the app with clean code and modern technologies.",
        duration: "6-10 weeks"
      },
      {
        title: "Testing & QA",
        description: "Comprehensive testing across devices and platforms.",
        duration: "2-3 weeks"
      },
      {
        title: "Deployment & Launch",
        description: "App store submission and launch strategy execution.",
        duration: "1-2 weeks"
      }
    ],
    faq: [
      {
        question: "Do you develop native or cross-platform apps?",
        answer: "We develop both! We recommend native for performance-critical apps and cross-platform for cost-effective solutions with wider reach."
      },
      {
        question: "How long does mobile app development take?",
        answer: "Typically 12-16 weeks for a complete app, but this varies based on complexity and features required."
      },
      {
        question: "Do you provide app maintenance after launch?",
        answer: "Yes, we offer maintenance packages including updates, bug fixes, and new feature development."
      },
      {
        question: "Can you help with app store submission?",
        answer: "Absolutely! We handle the entire submission process for both Apple App Store and Google Play Store."
      }
    ]
  };

  return (
    <motion.div  style={{ marginTop: '-100px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceLayout {...serviceData} />
    </motion.div>
  );
};

export default MobileApps;