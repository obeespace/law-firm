import React from 'react'
import {BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
import background from '../assets/lawBack1.jpg'
import founder from '../assets/founder.jpg'
import slider1 from '../assets/use1.jpg'
import slider2 from '../assets/use2.jpg'
import slider3 from '../assets/use3.jpg'
import slider4 from '../assets/use4.jpg'
import {AiOutlineLine} from 'react-icons/ai'
import {MdOutlineGavel} from 'react-icons/md'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

const Home = () => {
   
  return (
    <div>
        <div className='relative'>
            <img src={background} className='w-screen h-80 lg:h-96 lg:object-cover'/>
            <div className='absolute flex flex-col justify-center 
            items-center top-0 right-0 left-0 
            bottom-0 text-white w-5/6 mx-auto text-center'>
                
                <p className='text-4xl mt-5 lg:text-5xl font-playfair'>Legal Insight. Business Success</p>
                <p className='italic mt-5 font-thin text-lg text-center'>"A jury consists of twelve persons chosen to decide who has the better lawyer"</p>
                <Link to="contact"><motion.button whileTap={{scale:0.7}} className="rounded-lg py-2 px-4 bg-yellow-600 mt-9 shadow-md text-white">Book Consultation</motion.button></Link>
            </div>
        </div>

        <div className='w-5/6 mx-auto py-20 text-black'>
            <p className='flex gap-3 items-center font-semibold text-xl'>
                <MdOutlineGavel className='text-yellow-600'/>Why Choose Us <AiOutlineLine className='text-yellow-600'/>
            </p>
            <div className='mt-4 lg:flex items-center gap-20'>
                <p className='lg:text-5xl text-4xl font-black lg:w-5/6'>What Sets us Apart From the Rest</p>
                <p className='text-slate-800 mt-5 text-lg lg:mt-0'>Our Clients knows of our unique legal strengths, our ability to effectively advocate difficult and complex cases, and they feel satisfied when working with us</p>
            </div>
        </div>

        <hr className='w-4/6 mx-auto'/>

        <div className='w-5/6 mx-auto lg:py-20 py-10 lg:flex relative'>
            <div className='lg:w-3/6'>
                <p className='text-3xl font-black font mb-5 text-center'>Founder's <span className='text-yellow-600'>Tile</span></p>
                <img src={founder} alt='founder tile' className='rounded-xl lg:rounded-none'/>
            </div>
            <div className='rounded-lg mt-10 lg:mt-0 shadow-md text-center lg:text-left lg:px-20 px-10 lg:py-20 py-10 right-28 lg:w-3/6 lg:absolute bg-white'>
                <div className='mb-10 '>
                    <p className='flex gap-4 justify-center lg:justify-start text-2xl mb-5'><MdOutlineGavel className='text-yellow-600'/>Law firm</p>
                    <p className='text-slate-700 text-lg'>WDL Associates is a leading full-service law firm made up of experienced, talented and highly skilled lawyers.</p>
                </div>
                <div>
                    <p className='flex gap-4 justify-center lg:justify-start text-2xl mb-5'><MdOutlineGavel className='text-yellow-600'/>Attorneys</p>
                    <p className='text-slate-700 text-lg'>Our Lawyers are knowledgeable, responsive, and easy to communicate with.</p>
                </div>
            </div>
        </div>

        <hr className='w-4/6 mx-auto'/>
        
        <motion.div initial ={{x:-200}} animate ={{x:0}} exit ={{x:200}} className='w-5/6 mx-auto my-20'>
            <p className='flex lg:justify-center gap-3 items-center font-semibold text-xl'>
                <MdOutlineGavel className='text-yellow-600'/>Practice Areas <AiOutlineLine className='text-yellow-600'/>
            </p>
            <div className='mt-4 gap-20'>
                <p className='lg:text-5xl lg:text-center text-4xl font-black lg:w-5/6 mx-auto'>Our Coverage Area in Law Practices</p>
                <p className='text-slate-800 mt-5 text-lg lg:text-center'>Our Clients knows of our unique legal strengths, our ability to effectively advocate difficult and complex cases, and they feel satisfied when working with us</p>
            </div>

            <div className='flex justify-center gap-6 flex-wrap text-lg mt-10'>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Business law</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Employment and labor law</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Intellectual Property</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Matrimonial and family law</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Real Estate Law</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Health Care Law</p>
            </div>

            <div className='lg:text-center mt-10'><Link to="contact"><motion.button whileTap={{scale:0.7}} className="rounded-lg py-2 px-4 bg-yellow-600 mt-9 shadow-md">Free Consultancy</motion.button></Link>
            </div>
        </motion.div>

        <div className='w-5/6 mx-auto py-20 text-black'>
            <p className='flex gap-3 items-center font-semibold text-xl'>
                <MdOutlineGavel className='text-yellow-600'/>Attorneys <AiOutlineLine className='text-yellow-600'/>
            </p>
            <div className='mt-4 mb-20 lg:flex items-center gap-20'>
                <p className='lg:text-5xl text-4xl font-black lg:w-5/6'>Lawyers to represent you in various cases.</p>
                <p className='text-slate-800 mt-5 text-lg lg:mt-0'>Team members are outstanding lawyers who are famous for handling tough cases for clients. They always give well-organized and thorough advice for clients.</p>
            </div>

            <Swiper
                className="bg-orange-50 hidden lg:flex shadow-md rounded-2xl"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ delay: 7000 }}
                pagination={{ clickable: true }}
            >
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider4} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Justice Owanda</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider1} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Same Nmeje</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider3} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Samantha John</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider1} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Millamzy Ndefo</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider2} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Winnie Sunday</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider3} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Joy Emeka</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            </Swiper>
            <Swiper
                className="bg-orange-50 lg:hidden shadow-md rounded-2xl"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
            >
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider4} className='rounded-full mb-3 shadow-md h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Justice Owanda</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider1} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Same Nmeje</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider3} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Samantha John</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider1} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Millamzy Ndefo</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider2} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Brian Azukaeme</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col items-center py-20 px-14">
                <img alt="Client review 1" src={slider3} className='rounded-full mb-3 shadow-md transition-all ease-in-out hover:scale-110 h-52 w-52'/>
                <p className='text-lg border-b border-yellow-600 pb-3'>Attorney</p>
                <p className='font-bold mt-3 text-gray-500'>Joy Emeka</p>
                <div className='flex gap-4 mt-3 text-gray-800'>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsTwitter/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsLinkedin/></motion.p>
                    <motion.p whileTap={{scale: 0.7}} className='cursor-pointer'><BsInstagram/></motion.p>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>

        <div className='w-5/6 mx-auto mt-10 mb-32'>
            <p className='flex lg:justify-center gap-3 items-center font-semibold text-xl'>
                <MdOutlineGavel className='text-yellow-600'/>Awards <AiOutlineLine className='text-yellow-600'/>
            </p>
            <div className='mt-4 gap-20'>
                <p className='lg:text-5xl lg:text-center text-4xl font-black lg:w-5/6 mx-auto'>We've achieved many National and International Awards</p>
                <p className='text-slate-800 mt-5 text-lg lg:text-center'>Our Clients knows of our unique legal strengths, our ability to effectively advocate difficult and complex cases, and they feel satisfied when working with us</p>
            </div>

            <div className='flex justify-center gap-6 flex-wrap text-lg mt-10'>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Overall Best Law Firm 2018</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Overall Best Law Firm 2019</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Best Social Justice Award 2015</p>
                <p className='border border-yellow-600 rounded-lg shadow-md px-4 py-2'>Socrates International Legal Award 2018</p>
            </div>
        </div>
        
    </div>
  )
}

export default Home
