import React from 'react'
// import {arr} from '../constant'

const Card = (props) => {
  return (
    <div className='flex flex-col items-center justify-center md:mx-12 md:my-2 my-4 py-4 text-center cssfont '>

        {/* <i className="text-purple-700  ri-phone-line text-xl"></i> */}

        <div className='bg-purple-100 w-[52px] h-[52px] flexCenter rounded-full'>
        <div className='bg-purple-200 w-[38px] h-[38px] flexCenter rounded-full'>
        <i className={props.icon} />
        </div>
        </div>

        <h1 className='pt-4 text-xl font-bold'>{props.title}</h1>
        <h6 className="text-gray-700 py-4">{props.content}</h6>
        <h6 className='text-purple-700 font-semibold'>{props.describe}</h6>
        
    </div>
  )
}

export default Card