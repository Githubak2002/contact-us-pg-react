import React from 'react'

const Inputname = (props) =>(

    <div className='flex flex-col md:mx-4 mx-2 my-2 '>

    <label className='pb-1' htmlFor={props.name}>
        {props.label}
    </label>

    <input className=' border-[1.2px] border-slate-400 p-2 rounded-xl' 
    type={props.type} 
    placeholder={props.placeholder} 
    name={props.name}/>

    </div>
  )

export default Inputname