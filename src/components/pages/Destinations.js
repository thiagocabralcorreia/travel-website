import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function Destinations() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <img
        src="./images/img-destination.jpg"
        alt="beach"
        className="page-cover"
      />
      <h1 className="destinations">DESTINATIONS</h1>
    </motion.div>
  );
}

export default Destinations;
