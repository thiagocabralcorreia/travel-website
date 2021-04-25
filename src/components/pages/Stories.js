import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function Stories() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <img src="./images/img-stories.jpg" alt="diving" className="page-cover" />
      <h1 className="stories">STORIES</h1>
    </motion.div>
  );
}

export default Stories;
