import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '100px', minHeight: '100vh' }}
    >
      <div className="container">
        <h1>Portfolio Page</h1>
        <p>This is the portfolio page content.</p>
      </div>
    </motion.div>
  );
};

export default Portfolio;