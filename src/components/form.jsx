import React from 'react'
import Formdetails from './Formdetails'

export default function Form() {
  return (
    <div className='p-4 md:p-8 lg:p-12 xl:p-16 rounded shadow-md  '>
      <div className='text-center space-y-8'>
        <p className='font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#13375D]'>Leave Your Question Here</p>
        <p className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#4B698D]'>We aim to respond within 24 hours.</p>
      </div>
      <Formdetails/>
    </div>
  )
}
