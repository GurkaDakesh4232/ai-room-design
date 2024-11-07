"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function ImageSelection({selectedImage}) {
    const [file,setFile]=useState();
    const onFileSelected=(event)=>{
        console.log(event.target.files[0]);
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])

    }
  return (
    <div>
        <label>Select image of Your Room</label>

        <div className='mt-5'>
        <label htmlFor='upload-image'>
        <div className={`p-20 border rounded-xl border-dotted flex justify-center border-purple-600 bg-slate-200 cursor-pointer hover:shadow-lg ${file ? 'p-0 bg-white' : ''}`}>


            {!file?<Image src={'/upload.jpg'} width={70} height={70} alt=""/>
            :<Image src={URL.createObjectURL(file)}  alt="page" width={200} height={200} className=''/>}
          </div>


        </label>
            <input type='file' accept='image/*'
             id="upload-image"
            style={{display:'none'}}
            onChange={onFileSelected}
             />
        </div>
    </div>
  )
}

export default ImageSelection