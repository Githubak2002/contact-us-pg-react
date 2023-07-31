import React from 'react'
import Inputname from './inputname'

const Form = () => {
  return (
    <form className='mt-10 mb-6'>

      {/* === Name === */}
      <div className='flex sm:flex-row flex-col '>
        <div className='namecss sm:w-[100%] w-[260px]'>
        <Inputname 
        placeholder = "First Name"
        label = "First Name"
        name = "fName"
        type="text"
        />
        </div>
        <div className='namecss sm:w-[100%] w-[260px]'>
        <Inputname 
        placeholder = "Last Name"
        label = "Last Name"
        name = "lName"
        type="text"
        />
        </div>
      </div>

      {/* === other input === */}
      <div className='flex flex-col '>
      <Inputname 
        placeholder = "xyz@gmail.com"
        label = "Email"
        name = "Email"
        type="text"
      />
      <Inputname 
        placeholder = "+91 1234567890"
        label = "Phone No"
        name = "Phone no"
        type="number"
      />

      {/* === text box === */}
      <div className='flex flex-col md:mx-4 mx-2 my-2  '>
      <label className="pb-1" htmlFor="message">Message</label>
      <textarea className=' border-[1.2px] border-slate-400 p-2 rounded-xl' name="message" id="" rows="4" placeholder='Enter your message'></textarea>
      </div>

      {/* --- submit btn --- */}
      <button className='p-2 m-4 bg-purple-500 text-white font-semibold rounded-xl' type='subbmit'>Send message</button>

      </div>


    </form>
  )
}

export default Form