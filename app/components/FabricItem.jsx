import Image from 'next/image'
import React from 'react'

const FabricItem = ({name,imageUrl}) => {
  return (
    <div className='w-full flex  flex-col gap-2 cursor-pointer'>
        <Image

        src={imageUrl}
        width={400}
        height={400}
        alt='category'
        className='cursor-pointer'
        />
        <h3 className='text-xl'>{name}</h3>
    </div>
  )
}

export default FabricItem