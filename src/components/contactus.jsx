import React from 'react'
import Form from "./form"

const Contactus = () => {
  return (
    <section className='md:mt-14 mt-6 border-t-2 px-2'> 
    <div className='md:mt-[100px] mt-6 mx-auto max-w-[580px] '>

    <div className='flex flex-col items-center justify-center pt-6 md:mt-12 '>

      <h1 className=' text-purple-600 font-bold'>Contact us</h1>
      <h3 className='text-center font-black text-3xl md:text-4xl py-2 '>Get in touch</h3 >
      <h4 className='text-center text-gray-700 text-md py-2'>We'd love to hear from you. Please fill out this form.</h4>
    </div>

      <Form />

    </div>
    </section>
  )
}

export default Contactus