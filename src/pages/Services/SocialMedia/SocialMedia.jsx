import React from 'react';
import { motion } from 'framer-motion';
import ServiceLayout from '../../../components/sections/ServiceLayout/ServiceLayout';
import { 
  FiShare2, 
  FiUsers, 
  FiCamera, 
  FiMessageCircle,
  FiBarChart2,
  FiCalendar
} from 'react-icons/fi';

const SocialMedia = () => {
  const serviceData = {
    title: "Social Media Management",
    subtitle: "Build your brand and engage your audience",
    description: "Complete social media management services that increase brand awareness, drive engagement, and generate leads through strategic content and community management.",
    features: [
      {
        icon: <FiShare2 />,
        title: "Content Strategy",
        description: "Strategic content planning across all social platforms"
      },
      {
        icon: <FiUsers />,
        title: "Community Management",
        description: "Active engagement and relationship building with your audience"
      },
      {
        icon: <FiCamera />,
        title: "Content Creation",
        description: "Professional graphics, videos, and written content"
      },
      {
        icon: <FiMessageCircle />,
        title: "Social Advertising",
        description: "Targeted ad campaigns on Facebook, Instagram, and LinkedIn"
      },
      {
        icon: <FiBarChart2 />,
        title: "Analytics & Reporting",
        description: "Performance tracking and insights for continuous improvement"
      },
      {
        icon: <FiCalendar />,
        title: "Content Scheduling",
        description: "Strategic posting schedule for optimal engagement"
      }
    ],
    pricing: {
      plans: [
        {
          name: "Starter",
          price: "$400",
          duration: "month",
          description: "Basic social media management",
          features: [
            "2 Platforms",
            "12 Posts/Month",
            "Content Creation",
            "Basic Analytics",
            "Monthly Reporting"
          ]
        },
        {
          name: "Professional",
          price: "$800",
          duration: "month",
          description: "Comprehensive social media management",
          popular: true,
          features: [
            "4 Platforms",
            "24 Posts/Month",
            "Content Strategy",
            "Community Management",
            "Advanced Analytics",
            "Ad Campaign Management"
          ]
        },
        {
          name: "Enterprise",
          price: "$1,500",
          duration: "month",
          description: "Full-service social media management",
          features: [
            "All Platforms",
            "Unlimited Posts",
            "Dedicated Manager",
            "Influencer Outreach",
            "Custom Reporting",
            "Crisis Management"
          ]
        }
      ]
    },
    process: [
      {
        title: "Strategy Development",
        description: "Define goals, target audience, and platform-specific strategies.",
        duration: "1-2 weeks"
      },
      {
        title: "Content Planning",
        description: "Create content calendar and develop brand voice guidelines.",
        duration: "1 week"
      },
      {
        title: "Content Creation",
        description: "Produce engaging content including graphics, videos, and copy.",
        duration: "Ongoing"
      },
      {
        title: "Community Management",
        description: "Active engagement, response management, and relationship building.",
        duration: "Daily"
      },
      {
        title: "Performance Analysis",
        description: "Monitor metrics and optimize strategies based on performance data.",
        duration: "Weekly"
      }
    ],
    faq: [
      {
        question: "Which social media platforms do you manage?",
        answer: "We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok based on your target audience."
      },
      {
        question: "How often will you post on our social media?",
        answer: "Posting frequency varies by platform and strategy, typically 3-5 times per week per platform for optimal engagement."
      },
      {
        question: "Do you create all the content?",
        answer: "Yes, we handle content creation including graphics, videos, and copywriting, tailored to your brand voice."
      },
      {
        question: "How do you measure social media success?",
        answer: "We track metrics like engagement rate, reach, follower growth, website traffic, and conversions to measure success."
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

export default SocialMedia;