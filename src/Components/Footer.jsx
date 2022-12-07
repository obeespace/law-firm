import React from 'react'
import logo from '../assets/logo-wig.png'
import {BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='pt-14 pb-8 bg-slate-800 text-white'>
      <div className='w-5/6 mx-auto lg:flex gap-20 items-center'>
        <div className='mb-14 lg:mb-0'>
            <div className='flex gap-4 items-center border-b w-max border-b-yellow-600 pb-5'>
                <img src={logo} alt='' className='h-14' />
                <p className='font-black text-lg'>Wigs Dont Lie <br/>Associates</p>
            </div>

            <div className='mt-10'>
                <p className='text-xl font-semibold mb-3'>Wigs Dont Lie Associates</p>
                <p className='font-thin text-sm'>We are a firm that provides a very fast and responsible advisal and legal services.</p>
            </div>

            <div className='flex gap-4 mt-10'>
                <BsTwitter/>
                <BsLinkedin/>
                <BsInstagram/>
            </div>
        </div>

        <div>
            <p className='text-lg mb-4 pb-2 w-max border-b border-yellow-600'>Contact info</p>
            <div className='flex flex-col gap-5'>
                <p>contact@wigsdontlie.co</p>
                <p>(56) 345-23</p>
                <p>2560 Central District, Galway, Ireland</p>
            </div>
        </div>
      </div>

      <div className='border-t border-yellow-600 w-5/6 mx-auto mt-10 pt-3 text-center'>
        <p>Copyright 2022 WDL Associates, All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
