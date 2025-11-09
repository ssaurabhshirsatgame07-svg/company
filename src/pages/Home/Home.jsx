// src/pages/Home/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/sections/Hero/Hero';
import Services from '../../components/sections/Services/Services';
import Portfolio from '../../components/sections/Portfolio/Portfolio';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import Contact from '../../components/sections/Contact/Contact';
import GrowthSection from '../../components/sections/growth/GrowthSection';



const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <GrowthSection/>
      <Contact />
    </motion.div>
  );
};

export default Home;