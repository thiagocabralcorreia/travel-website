import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { pageTransition, transition } from '../../animations/index';

function SignUp() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transition}
    >
      <img
        src="./images/img-signup.jpg"
        alt="woman swimming"
        className="page-cover"
      />
      <h1 className="sign-up">SIGN UP</h1>
    </motion.div>
  );
}

export default SignUp;
