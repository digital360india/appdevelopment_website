import React from 'react'
import Contactinfo from '../Contactinfo'
import Form from '../form'
import Footer from '../Footer'

export default function Contact() {
  return (
    <>
  <div className='md:p-[100px] p-[30px]'>
      <Contactinfo/>
      <Form/>
      </div>
      <Footer/>
    </>
  )
}
