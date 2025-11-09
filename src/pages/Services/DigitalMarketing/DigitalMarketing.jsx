import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../../components/sections/ServiceLayout/ServiceLayout';
import { 
  FiTrendingUp, 
  FiTarget, 
  FiDollarSign, 
  FiBarChart2,
  FiUsers,
  FiMail
} from 'react-icons/fi';

const DigitalMarketing = () => {
  const serviceData = {
    title: "Digital Marketing",
    subtitle: "Data-driven strategies to grow your business online",
    description: "Comprehensive digital marketing solutions that drive traffic, generate leads, and increase conversions through proven strategies and cutting-edge techniques.",
    features: [
      {
        icon: <FiTrendingUp />,
        title: "Strategy Development",
        description: "Custom marketing plans aligned with your business goals"
      },
      {
        icon: <FiTarget />,
        title: "Targeted Campaigns",
        description: "Precise audience targeting for maximum ROI"
      },
      {
        icon: <FiDollarSign />,
        title: "PPC Management",
        description: "Google Ads and social media advertising optimization"
      },
      {
        icon: <FiBarChart2 />,
        title: "Analytics & Reporting",
        description: "Comprehensive performance tracking and insights"
      },
      {
        icon: <FiUsers />,
        title: "Content Marketing",
        description: "Engaging content that attracts and converts audiences"
      },
      {
        icon: <FiMail />,
        title: "Email Marketing",
        description: "Automated campaigns and newsletter management"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Starter",
          price: "$500",
          duration: "month",
          description: "Basic digital marketing for small businesses",
          features: [
            "Strategy Development",
            "Google Ads Management",
            "Monthly Reporting",
            "Basic Analytics",
            "Email Support"
          ]
        },
        {
          name: "Growth",
          price: "$1,200",
          duration: "month",
          description: "Comprehensive marketing for growing businesses",
          popular: true,
          features: [
            "Full Strategy & Execution",
            "Google & Meta Ads",
            "Content Creation",
            "Advanced Analytics",
            "Weekly Reporting",
            "Priority Support"
          ]
        },
        {
          name: "Enterprise",
          price: "$2,500",
          duration: "month",
          description: "Full-service marketing for large organizations",
          features: [
            "Multi-channel Strategy",
            "All Platform Management",
            "Dedicated Account Manager",
            "Custom Reporting",
            "24/7 Support",
            "Competitor Analysis"
          ]
        }
      ]
    },
    process: [
      {
        title: "Audit & Analysis",
        description: "Comprehensive analysis of your current marketing efforts and competition.",
        duration: "1 week"
      },
      {
        title: "Strategy Development",
        description: "Create customized marketing strategies based on your goals and audience.",
        duration: "1-2 weeks"
      },
      {
        title: "Implementation",
        description: "Execute campaigns across selected channels and platforms.",
        duration: "Ongoing"
      },
      {
        title: "Optimization",
        description: "Continuous monitoring and improvement of campaign performance.",
        duration: "Ongoing"
      },
      {
        title: "Reporting & Analysis",
        description: "Regular performance reports and strategic recommendations.",
        duration: "Monthly"
      }
    ],
    faq: [
      {
        question: "How long until I see results from digital marketing?",
        answer: "PPC campaigns show immediate results, while SEO and content marketing typically take 3-6 months to show significant impact."
      },
      {
        question: "Do you work with specific industries?",
        answer: "We have experience across multiple industries including e-commerce, SaaS, healthcare, and professional services."
      },
      {
        question: "What's included in your monthly reports?",
        answer: "Comprehensive reports including traffic, conversions, ROI, and strategic recommendations for improvement."
      },
      {
        question: "Can you work with our existing marketing team?",
        answer: "Yes, we can collaborate with your internal team or handle all marketing activities independently."
      }
    ]
  };

  return (
    <>
      <style>
        {`
          .service-page {
            margin-top: -100px; /* Desktop top spacing */
          }

          @media (max-width: 768px) {
            .service-page {
              margin-top: -80px; /* Mobile top spacing adjustment */
            }
          }
        `}
      </style>

      <motion.div
        className="service-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ServiceLayout {...serviceData} />
      </motion.div>
    </>
  );
};

export default DigitalMarketing;
