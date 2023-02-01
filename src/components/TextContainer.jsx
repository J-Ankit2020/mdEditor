import React from 'react'
import Heading from './Heading'

const TextContainer = ({isPreview}) => {
  const data = ''
  const text = isPreview ? 'PREVIEW' : 'MARKDOWN';
  return (
    <>
        <div className='w-1/2  bg-[#151619] text-white h-full '>
    <Heading text={text}/>
    <div className='w-full flex'>
    <textarea className='bg-transparent w-full h-screen  outline-none p-4 resize-none overflow-hidden' disabled ={isPreview}/>
    </div>
    </div>
   {isPreview ? '':<span className='h-screen bg-gray-600 w-0.5'></span>} 
    </>
  )
}

export default TextContainer;