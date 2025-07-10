import Image from 'next/image'
import React from 'react'
import FadeInParagraph from '../components/FadeInParagraph'

const OurValuesSection = () => {
  return (

  
    <div className=' flex flex-col md:p-20 lg:p-40 pt-40 p-10'>

        <h2 className='text-center mb-10'>Our Values</h2>


        <div className='flex-row md:gap-10 lg:gap-30 md:flex'>

            <div className='md:w-1/3'>

          

       
    <Image

    src='/images/piece-1.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>consectetur adipiscing </h3>


     <FadeInParagraph 
     className='text-center'
     paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    
      
       </div>
       <div className='md:w-1/3'>

       
    <Image

    src='/images/piece-2.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>consectetur adipiscing </h3>


    <FadeInParagraph 
     className='text-center'
     paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    
      
       </div>
<div className='md:w-1/3'>

       
    <Image

    src='/images/piece-3.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>consectetur adipiscing </h3>

<FadeInParagraph 
     className='text-center'
     paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    
      
       </div>
    


        </div>
   
     
     
     </div>

   
  )
}

export default OurValuesSection