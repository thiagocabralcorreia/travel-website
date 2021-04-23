import Cover from '../Cover';
import Cards from '../Cards';
import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function Home() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <Cover />
      <Cards />
      <Footer />
    </motion.div>
  );
}

export default Home;
