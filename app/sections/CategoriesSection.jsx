'use client';
import React, { useRef } from 'react';
import FabricItem from '../components/FabricItem';
import { categories } from '../../public/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CategoriesSection = () => {
  const scrollRef = useRef(null);
  const itemWidth = 250;

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative px-10 py-20 text-center w-full overflow-hidden">
      <h2 className="text-3xl mb-10">Explore Our Fabrics</h2>

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow hover:scale-110 transition hidden md:block"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow hover:scale-110 transition hidden md:block"
      >
        <ChevronRight />
      </button>

      {/* Carousel with animations */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 snap-x snap-mandatory scroll-smooth overflow-x-auto scrollbar-hide px-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[250px] snap-start"
            variants={itemVariants}
          >
            <FabricItem name={item.name} imageUrl={item.bgImage} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoriesSection;
