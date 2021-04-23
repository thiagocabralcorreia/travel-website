import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function Services() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <img src="./images/img-services.jpg" alt="ship" className="page-cover" />
      <h1 className="services">SERVICES</h1>
    </motion.div>
  );
}

export default Services;
