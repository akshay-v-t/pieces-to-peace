'use client'
import React from 'react'
import FadeInParagraph from '../components/FadeInParagraph'
import { motion } from 'framer-motion'

const KeyFeatures = () => {
  return (

    <motion.div className='flex flex-col p-10 justify-center '>
<div className="relative overflow-hidden py-20 flex items-center justify-center">
     
      <motion.div
        className="absolute inset-0 bg-[url('/images/floral.webp')] bg-cover bg-center scale-110"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className='bg-white/80 p-20 z-10'>
        <h2 className='text-9xl'>

              Your Trusted partner in exceptional fabric

        </h2>
      
      </div>
      </div>
     
      

      

      



  


  <div className='grid grid-cols-4 gap-20 p-10'>

        <div className='flex flex-col gap-2'>
            <h3>Print on Demand</h3>

            <FadeInParagraph paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            

        </div>
        <div className='flex flex-col gap-2'>
            <h3>Print on Demand</h3>
            <FadeInParagraph paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

        </div>
        <div className='flex flex-col gap-2'>
            <h3>Print on Demand</h3>
            <FadeInParagraph paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
        <div className='flex flex-col gap-2'>
            <h3>Print on Demand</h3>
             <FadeInParagraph paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

        </div>



      </div>



  </motion.div>
  


  )
}

export default KeyFeatures