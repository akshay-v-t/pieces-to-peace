'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const AboutSection = () => {
  return (
    <div className="items-center flex px-20 py-40 gap-20">
      {/* Left Side Images */}
      <div className="w-1/3 relative">
        <Image
          src="/images/fabrics-2.jpeg"
          width={500}
          height={200}
          alt="fabric"
        />
        <Image
          src="/images/fabrics.jpg"
          width={500}
          height={200}
          className="border-10 border-white absolute top-[150px] left-10"
          alt="fabric"
        />
      </div>

      {/* Right Side Text */}
      <motion.div
        className="w-2/2 pl-20 flex-col gap-6 flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={textVariants}
      >
        <motion.h3 variants={textVariants}>consectetur adipiscing elit</motion.h3>
        <motion.h2 className="text-4xl" variants={textVariants}>
          sed do eiusmod tempor incididunt
        </motion.h2>

        <motion.hr className="w-xl" variants={textVariants} />

        <motion.p
          className="font-extralight text-amber-800/60 text-xl"
          variants={textVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </motion.p>

        <motion.button className="w-fit p-4 bg-amber-800 text-white" variants={textVariants}>
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutSection;
