import React from 'react'
import logo from '../assets/logo-wig.png'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    function toggle(prev){
        setToggleMenu(true)
    }

    
  return (
    <div className=''>
        <div className='bg-slate-800 text-white'>
            <div className='hidden w-5/6 mx-auto lg:flex justify-between items-center'>
                <div className='flex gap-6 my-4'>
                    <p>contact@wigsdontlie.co</p>
                    <p>(56) 345-23</p>
                    <p>2560 Central District, Galway, Ireland</p>
                </div>
                <div className='flex gap-6 text-xl'>
                    <BsTwitter />
                    <BsLinkedin />
                    <BsInstagram/>
                </div>
            </div>
        </div>
        <div className='w-5/6 mx-auto py-5'>
            <div className='hidden lg:flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src={logo} alt='' className='h-14' />
                    <p className='font-black text-lg'>Wigs Dont Lie <br/>Associates</p>
                </div>
                <div className='flex gap-14 text-lg font-semibold'>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='about'><p>About</p></Link>
                    <Link to='contact'><p>Contact</p></Link>
                </div>
            </div>

            <div className='flex lg:hidden items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <img src={logo} alt='' className='h-14' />
                    <p className='font-black text-lg'>Wigs Dont Lie <br/>Associates</p>
                </div>
                <div className='relative'>
                    {toggleMenu ? <motion.p whileTap={{scale:0.7}}><IoMdClose className='text-3xl text-yellow-600 cursor-pointer' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p> : 
                    <motion.p whileTap={{scale:0.7}}><GiHamburgerMenu className='text-3xl cursor-pointer text-yellow-600' onClick={()=> setToggleMenu(prev => !prev)}/></motion.p>}  
                </div>
                {toggleMenu && <div className='bg-white z-50 text-black min-h-full w-4/6 absolute top-0 left-0 border-b border-yellow-700 pb-2'>
                    <div className='flex flex-col gap-10 mt-32 items-center w-1/6 mx-auto text-lg font-semibold '>
                        <Link to='/'><p className='hover:border-b hover:border-yellow-700 pb-2' onClick={()=> setToggleMenu(prev => !prev)}>Home</p></Link>
                        <Link to='about'><p className='hover:border-b hover:border-yellow-700 pb-2' onClick={()=> setToggleMenu(prev => !prev)}>About</p></Link>
                        <Link to='contact'><p className='hover:border-b hover:border-yellow-700 pb-2' onClick={()=> setToggleMenu(prev => !prev)}>Contact</p></Link>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Header
