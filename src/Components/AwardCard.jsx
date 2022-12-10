import React from 'react'
import {FaAward} from 'react-icons/fa'
import {AiOutlineLine} from 'react-icons/ai'

const AwardCard = (props) => {
  return (
    <div className='flex flex-col border border-yellow-700 items-center justify-center shadow-md px-9 py-6 rounded-2xl'>
      <FaAward className='text-yellow-700 text-2xl mb-4'/>
      <p>{props.title}</p>
      <AiOutlineLine className='text-yellow-700'/>
      <p>{props.year}</p>
    </div>
  )
}

export default AwardCard
