import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <div className='items-start flex px-20 pt-40 gap-20'>
   
     <div className='w-1/3'>

       
    <Image

    src='/images/fabrics-2.jpeg'
    width={500}
    height={200}
    alt='fabric'
    />

    <Image

    src='/images/fabrics.jpg'
    width={500}
    height={200}
    className='border-10 border-white relative top-[-150] left-10 '
    alt='fabric'
    />
      
       </div>

     <div className='w-2/2 pl-20 flex-col gap-6 flex '>

     <h3 className=''>consectetur adipiscing elit</h3>
     <h2 className='text-4xl'>sed do eiusmod tempor incididunt</h2>

     <hr className='w-xl ' />
     <p className='font-extralight text-amber-900 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

     <button className=' w-fit p-4'> Learn More </button>





     </div>
     
     </div>

   
  )
}

export default AboutSection