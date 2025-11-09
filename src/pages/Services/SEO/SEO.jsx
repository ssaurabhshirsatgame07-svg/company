import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../../components/sections/ServiceLayout/ServiceLayout';
import { 
  FiSearch, 
  FiTrendingUp, 
  FiBarChart2, 
  FiFileText,
  FiGlobe,
  FiAward
} from 'react-icons/fi';

const SEO = () => {
  const serviceData = {
    title: "SEO Services",
    subtitle: "Increase your visibility and drive organic traffic",
    description: "Comprehensive search engine optimization strategies that improve your website's rankings, drive qualified traffic, and increase conversions through proven SEO techniques.",
    features: [
      {
        icon: <FiSearch />,
        title: "Keyword Research",
        description: "Strategic keyword analysis and targeting"
      },
      {
        icon: <FiTrendingUp />,
        title: "On-Page SEO",
        description: "Optimization of content, meta tags, and site structure"
      },
      {
        icon: <FiBarChart2 />,
        title: "Technical SEO",
        description: "Site speed, mobile optimization, and technical improvements"
      },
      {
        icon: <FiFileText />,
        title: "Content Strategy",
        description: "SEO-optimized content creation and optimization"
      },
      {
        icon: <FiGlobe />,
        title: "Local SEO",
        description: "Google Business optimization and local search visibility"
      },
      {
        icon: <FiAward />,
        title: "Link Building",
        description: "Quality backlink acquisition and authority building"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Local SEO",
          price: "$600",
          duration: "month",
          description: "For local businesses targeting specific areas",
          features: [
            "Google Business Optimization",
            "Local Citation Building",
            "On-Page SEO",
            "Monthly Reporting",
            "Review Management"
          ]
        },
        {
          name: "National SEO",
          price: "$1,200",
          duration: "month",
          description: "For businesses targeting national markets",
          popular: true,
          features: [
            "Comprehensive SEO Audit",
            "Technical SEO",
            "Content Strategy",
            "Link Building",
            "Advanced Analytics",
            "Competitor Analysis"
          ]
        },
        {
          name: "E-commerce SEO",
          price: "$2,000",
          duration: "month",
          description: "For online stores and e-commerce websites",
          features: [
            "Product Page Optimization",
            "Category Page SEO",
            "International SEO",
            "Advanced Technical SEO",
            "Custom Reporting",
            "Dedicated SEO Specialist"
          ]
        }
      ]
    },
    process: [
      {
        title: "SEO Audit",
        description: "Comprehensive analysis of your current SEO performance and opportunities.",
        duration: "1-2 weeks"
      },
      {
        title: "Strategy Development",
        description: "Create customized SEO strategy based on audit findings and goals.",
        duration: "1 week"
      },
      {
        title: "Implementation",
        description: "Execute on-page, technical, and content optimizations.",
        duration: "2-4 weeks"
      },
      {
        title: "Content Creation",
        description: "Develop and optimize SEO-focused content and pages.",
        duration: "Ongoing"
      },
      {
        title: "Monitoring & Reporting",
        description: "Track rankings, traffic, and provide monthly performance reports.",
        duration: "Monthly"
      }
    ],
    faq: [
      {
        question: "How long does it take to see SEO results?",
        answer: "Typically 3-6 months for noticeable improvements, with significant results in 6-12 months depending on competition."
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer: "No ethical SEO company guarantees #1 rankings, but we guarantee improved rankings and increased organic traffic."
      },
      {
        question: "What's included in your SEO reports?",
        answer: "Comprehensive reports including keyword rankings, traffic analytics, backlink progress, and strategic recommendations."
      },
      {
        question: "Do you work with businesses in competitive industries?",
        answer: "Yes, we have experience in highly competitive industries and use advanced strategies to achieve results."
      }
    ]
  };

  return (
    <>
      <style>
        {`
          /* Adjust banner position on desktop screens */
          .service-page {
            margin-top: -100px;
          }

          /* Mobile: reduce overlap spacing for navbar */
          @media (max-width: 768px) {
            .service-page {
              margin-top: -80px;
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

export default SEO;
