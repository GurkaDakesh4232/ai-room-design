import React, { useState } from 'react'
import Image from 'next/image'
function DesignType({selectedDesignType}) {
    const Designs=[
        {
            name:'Modern',
            image:'/modern.avif',
        },

        {
            name:'Industrial',
            image:'/industrial.jpg',
        },

        {
            name:'Bohemain',
            image:'/bohemain.avif',
        },

        {
            name:'Traditional',
            image:'/traditional.avif',
        },

        {
            name:'Minimalist',
            image:'/minimalist.jpeg',
        },
        {
            name:'Luxary',
            image:'/luxary.jpg',
        },
        {
            name:'Farmhouse',
            image:'/farmhouse.jpg',
        },
        {
            name:'Rustic',
            image:'/rustic.png',
        }
    ]

    const [selectedOption,setSelectedOption]=useState();
  return (
    <div className='mt-4 mb-10'>
    <label className='text-grey-500'> Select Interior Design Type</label>
    <div className='grid grid-cols-2 grid-cols-3 mt-2 lg:grid-cols-4 gap-5'>
        {Designs.map((design,index)=>(
        <div key={index} onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}}>
        <Image 
    src={design.image} 
    width={100} 
    height={100} 
    className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
        design.name === selectedOption ? 'border-2 border-dotted border-purple-700 rounded-md p-1' : ''
    }`} 
     />

        <h2>{design.name}</h2>

        </div>
        
        ))}
    </div>
    
    
    </div>
  )
}

export default DesignType