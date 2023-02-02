import React, { useEffect, useState } from 'react'
import Heading from './Heading'
const MarkDown = ({converter, setMD}) => {
  const handleChange = (e) => {
    converter(e.target.value);
    setMD(e.target.value)
  }
  useEffect(()=>{
    converter(window.localStorage.getItem("rawMD"))
  },[])
  return (
    <div className = "w-1/2  bg-[#151619] text-white h-full mr-0.5">
    <Heading text='MARKDOWN'/>
    <div className='w-full flex'>
    <textarea name="markdown-box" className='bg-transparent w-full h-screen  outline-none p-4 resize-none overflow-hidden 'onChange= {handleChange}>
    {window.localStorage.getItem("rawMD")}
    </textarea>
    </div>
    </div>
  )
}

export default MarkDown;