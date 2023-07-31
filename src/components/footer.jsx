import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear();

    return(
    <div className=' bg-black pt-4 mt-12 pb-4 text-white'>
        <h2 className='flexCenter text-xl'>
        <i className="ri-copyright-line px-2"></i>  {year} Anurag Lohar.
        </h2>
  </div>  
)}


export default Footer