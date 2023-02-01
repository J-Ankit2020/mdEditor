import React from 'react'
import Heading from './Heading'

const Preview = ({text}) => {
  return (
   <div className = "w-1/2  bg-[#151619] text-white h-full">
    <Heading text='PREVIEW'/>
    <div className='w-full'>
    <div name="markdown-box" className='bg-transparent w-full h-screen p-4 overflow-hidden list-disc' dangerouslySetInnerHTML={{'__html': text}}></div>
    </div>
    </div>
  )
}

export default Preview