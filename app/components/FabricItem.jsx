import Image from 'next/image'
import React from 'react'

const FabricItem = ({name,imageUrl}) => {
  return (
    <div>
        <Image

        src={imageUrl}
        width={300}
        height={400}
        alt='category'
        />
        <h3>{name}</h3>
    </div>
  )
}

export default FabricItem