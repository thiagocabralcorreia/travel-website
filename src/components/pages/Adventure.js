import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function Adventure() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <img src="./images/img-adventure.jpg" alt="surf" className="page-cover" />
      <h1 className="destinations">ADVENTURE TRAVEL</h1>
    </motion.div>
  );
}

export default Adventure;
