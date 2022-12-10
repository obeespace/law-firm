import React from 'react'
import {MdOutlineGavel} from 'react-icons/md'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col gap-4 shadow-lg lg:w-80 mt-14 lg:mt-0 px-10 py-5 items-center text-center rounded-xl'>
      <MdOutlineGavel className='font-semibold text-2xl text-yellow-700'/>
      <p className='font-semibold '>{props.title}</p>
      <p className='text-gray-700'>{props.text}</p>
    </div>
  )
}

export default AboutCard
