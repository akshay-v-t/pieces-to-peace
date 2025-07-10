'use client';
import React from 'react';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const BelowHeader = () => {
  return (
    <div className="flex md:flex-row flex-col ">
      {/* Left Section */}
      <div className="relative flex min-h-screen w-full md:w-[50vw] items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/curtain.jpg')] bg-cover bg-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />
        <h1 className="text-[#49352C] text-3xl  z-10 relative">aliquip ex ea</h1>
      </div>

      {/* Right Section */}
      <div className="relative flex min-h-screen w-full md:w-[50vw] items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/curtains.jpg')] bg-cover bg-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />
        <h1 className="text-[#49352C] text-3xl  z-10 relative">occaecat cupidatat</h1>
      </div>
    </div>
  );
};

export default BelowHeader;
