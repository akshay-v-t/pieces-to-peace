import Image from 'next/image'
import React from 'react'

const OurValuesSection = () => {
  return (
    <div className=' flex flex-col p-40 pt-40 '>

        <h2 className='text-center'>Our Values</h2>


        <div className='flex gap-30'>

            <div className='w-1/3'>

       
    <Image

    src='/images/piece-1.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>consectetur adipiscing elit</h3>


    <p className='font-extralight text-black/60 text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>


    
      
       </div>
       <div className='w-1/3'>

       
    <Image

    src='/images/piece-2.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>consectetur adipiscing elit</h3>


     <p className='font-extralight text-black/60 text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>


    
      
       </div>
<div className='w-1/3'>

       
    <Image

    src='/images/piece-3.webp'
    width={500}
    height={200}
    alt='fabric'
    />
         <h3 className=' text-center my-4'>consectetur adipiscing elit</h3>


        <p className='font-extralight text-black/60 text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>


    
      
       </div>
    


        </div>
   
     
     
     </div>

   
  )
}

export default OurValuesSection