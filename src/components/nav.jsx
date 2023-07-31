import React from 'react'

const Nav = () => {
  return (
    <div className=' max-w-[1280px] m-auto px-4 md:px-10 py-4 flex justify-between items-center '>

      <div className='flexCenter'>
        <i className="mx-2 text-4xl text-purple-500 ri-building-2-fill"></i>
        <h1 className='md:text-4xl text-xl font-bold '>L0go </h1>

      </div>
      <div >
        <ul className='flex font-semibold md:text-2xl'>
          <a href="#"><li className='lihover px-2 md:text-xl text-lg md:flex hidden'>Home</li></a>
          <a href="#"><li className=' lihover md:flex hidden px-2 md:text-xl text-lg'>Abuot</li></a>
          <a href="#"><li className='lihover px-2 md:text-xl text-lg'>Contact us</li></a>
        </ul>
      </div>

    </div>
  )
}

export default Nav