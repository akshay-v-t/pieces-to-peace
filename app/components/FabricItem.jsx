import Image from 'next/image'
import React from 'react'

const FabricItem = ({name,imageUrl}) => {
  return (
    <div className='bg-amber-600 w-full flex items-center flex-col '>
        <Image

        src={imageUrl}
        width={300}
        height={400}
        alt='category'
        />
        <h3 className=''>{name}</h3>
    </div>
  )
}

export default FabricItem