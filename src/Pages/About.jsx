import React from 'react'
import backlaw from '../assets/lawBack2.jpg'

const About = () => {
  return (
    <div>
      <div className='relative'>
        <img src={backlaw} className='w-screen h-max lg:h-96 lg:object-cover'/>
        <div className='absolute flex flex-col justify-center 
        items-center top-0 right-0 left-0 
        bottom-0 text-white w-5/6 mx-auto text-center'>
          <p className='text-4xl mt-5 lg:text-5xl font-playfair'>About yu Us</p>
        </div>
      </div>
    </div>
  )
}

export default About
