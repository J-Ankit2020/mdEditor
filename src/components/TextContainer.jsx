import React from 'react'
import Heading from './Heading'

const TextContainer = ({isPreview}) => {
  const data = ''
  const text = isPreview ? 'PREVIEW' : 'MARKDOWN';
  return (
        <div className={`w-1/2  bg-[#151619] text-white h-full ${isPreview ? '' : 'mr-0.5'}`}>
    <Heading text={text}/>
    <div className='w-full flex'>
    <textarea className='bg-transparent w-full h-screen  outline-none p-4 resize-none overflow-hidden' disabled ={isPreview}/>
    </div>
    </div>
  )
}

export default TextContainer;