'use client';
import { motion } from 'framer-motion';
import React from 'react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const character = {
  hidden: { opacity: 0, filter: 'blur(2px)', y: 10 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

/**
 * FadeInParagraph
 * @param paragraph - string of text to animate
 * @param className - optional additional tailwind classes
 * @param once - whether to animate only once (default: true)
 * @param delay - delay before animation starts (default: 0)
 */
const FadeInParagraph = ({
  paragraph,
  className = '',
  once = true,
  delay = 0,
}) => {
  return (
    <motion.p
      className={`leading-relaxed ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {paragraph.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={character}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default FadeInParagraph;
