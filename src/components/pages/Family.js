import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function Family() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <img src="./images/img-family.jpg" alt="family" className="page-cover" />
      <h1 className="destinations">FAMILY HOLIDAYS</h1>
    </motion.div>
  );
}

export default Family;
