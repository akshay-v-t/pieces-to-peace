'use client';
import React, { useRef } from 'react';
import FabricItem from '../components/FabricItem';
import { categories } from '../../public/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategoriesSection = () => {
  const scrollRef = useRef(null);
  const itemWidth = 250; // width of one item

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative px-10 py-20 text-center w-full overflow-hidden">
      <h2 className="text-3xl  mb-10">Explore Our Fabrics</h2>

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

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 snap-x snap-mandatory scroll-smooth overflow-x-auto scrollbar-hide px-2"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] snap-start"
          >
            <FabricItem name={item.name} imageUrl={item.bgImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
