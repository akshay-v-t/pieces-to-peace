import React from 'react'
import FabricItem from '../components/FabricItem'
import {categories} from '../../public/data'

const CategoriesSection = () => {


  return (
     <div className='flex flex-col p-10 justify-center'>
        <h2>Explore Our Categories</h2>

        <div className='grid grid-cols-4 mt-10 justify-between'>
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