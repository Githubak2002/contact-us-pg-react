import React from 'react'
import Card from "./card"
import {arr} from "../constant"

const Header = () => {
  return (
    <div className='max-w-[1280px] m-auto p-8 flex flex-col justify-center items-center md:mt-8'>
        <h1 className=' text-purple-600 text-lg font-bold'>Contact us</h1>
        <h3 className='text-center font-black text-4xl md:text-5xl py-2 '>We'd love to hear from you</h3 >
        <h4 className='text-center text-gray-700 text-md py-2'>Our friendly team is always here to chat.</h4>

    <div className='md:mt-12 mt-10 flex md:flex-row flex-col justify-center md:place-items-start items-center'>
    {
        arr.map((val) => {  
            return(    
            <Card 
                key = {val.id}
                icon = {val.icon}
                title = {val.title}
                content = {val.content}
                describe = {val.describe}
            />
            )})
    }
    </div>


    </div>
  )
}

export default Header