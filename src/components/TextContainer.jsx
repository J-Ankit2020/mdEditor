import React from 'react'
import Heading from './Heading'

const TextContainer = ({isPreview}) => {
  const data = ''
  const text = isPreview ? 'PREVIEW' : 'MARKDOWN';
  return (
        <div className='w-1/2  bg-[#151619] text-white h-full '>
    <Heading text={text}/>
    <textarea className='bg-transparent w-full  outline-none p-4 h-screen resize-none ' disabled ={isPreview}/>
    </div>
  )
}

export default TextContainer;