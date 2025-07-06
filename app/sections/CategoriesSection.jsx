import React from 'react'
import FabricItem from '../components/FabricItem'
import {categories} from '../../public/data'

const CategoriesSection = () => {


  return (
     <div className='flex flex-col p-10 justify-center'>
        <h2>Explore Our Fabrics</h2>

        <div className='grid grid-cols-4 gap-8 mt-10 w-full '>
{
        categories.map((item, index)=>{
            return  <FabricItem key={index} name={item.name} imageUrl={item.bgImage}/>
        })
}


        

</div>

    </div>
  )
}

export default CategoriesSection