import React from 'react'
import { motion } from "framer-motion"
import contact from '../assets/contact.jpg'
import { MdEmail, MdOutlineGavel } from 'react-icons/md'
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillInstagram, AiOutlineLine } from 'react-icons/ai'

const Contact = () => {
  return (
    <div>
        <div className='relative'>
          <img src={contact} className='w-screen h-80 lg:h-96 lg:object-cover'/>
          <div className='absolute flex flex-col justify-center 
          items-center top-0 right-0 left-0
          bottom-0 text-white w-5/6 mx-auto text-center'>
          <p className='text-white text-4xl mt-5 lg:text-5xl font-playfair border-b-2 border-yellow-600 pb-3'>Contact Us</p>
          </div>
        </div>

        <div className='w-5/6 mx-auto my-20 text-black'>
            <p className='flex gap-3 items-center font-semibold text-xl'>
                <MdOutlineGavel className='text-yellow-600'/>Contact & Location <AiOutlineLine className='text-yellow-600'/>
            </p>
            <div className='mt-4 lg:flex items-center gap-20'>
                <p className='lg:text-5xl text-4xl font-black lg:w-5/6'>Leave a message or Book a Free Consultation</p>
                <p className='text-slate-800 mt-5 text-lg lg:mt-0'>If you are facing a complex law issue, contact us on direct, by phone or fill out the form to receive a free consultation from our experienced trial attorneys</p>
            </div>
        </div>

        <div className='bg-white my-14 text-lg'>
          <div className="lg:flex lg:gap-4 w-5/6 mx-auto">
            <div className="lg:w-4/6 text-center">
              <h3 className="font-bold mt-20 text-yellow-600 text-lg">LOCATION</h3>
              <p className="">
              Headquarters: Via Montalbano, 5500/B Zocca Modena, Modena - 41059, Italy
              </p>
              <p className="mt-10">
              Thailand Office: 868 Phahon Yothin Road, Muang, Chiang Rai, Thailand
              </p>
              <p className="mt-10">
              Taiwan Office: No.133, Limin Rd. Nanzih District, Taiwan
              </p>
              <p className="mt-10">
              US Office: 908 W Aztec Blvd, Aztec - New York, 87410, United States
              </p>
              
      
              <div className="mt-2 flex gap-2 justify-center">
                <p className="flex items-center gap-1">
                  <MdEmail />
                  contact@wigsdontlie.co
                </p>
                <p className="flex items-center gap-1">
                  <BsFillTelephoneFill />
                  (56) 345-23
                </p>
              </div>
              <h3 className="mb-2 font-bold text-lg mt-16 text-yellow-600">
                WE ARE SOCIAL
              </h3>
              <div className="w-2/6 m-auto flex gap-2 justify-center">
                <div className="bg-white border-2 border-yellow-600 cursor-pointer hover:bg-yellow-700 hover:text-white w-min p-2 rounded-md">
                  <AiFillInstagram />
                </div>
                <div className="bg-white border-2 border-yellow-600 cursor-pointer hover:bg-yellow-700 hover:text-white w-min p-2 rounded-md">
                  <BsFacebook />
                </div>
              </div>
            </div>
            <div className="mt-6 mb-8 lg:w-4/6 flex flex-col items-center gap-5 py-20">
              <input
                placeholder="Name"
                className="px-3 py-2 shadow-lg border border-yellow-600 focus:ring-2 rounded-md w-4/6"
              />
              <input
                placeholder="Email"
                className="px-3 py-2 shadow-lg border border-yellow-600 focus:ring-2 rounded-md w-4/6"
              />
              <textarea
                className="px-4 py-2 border border-yellow-600 shadow-lg focus:ring-2 rounded-md w-4/6"
                placeholder="Feedback"
                rows={6}
              />
              <motion.button whileTap={{scale:0.7}} className="rounded-lg py-2 px-4 bg-yellow-600 mt-9 shadow-md">Send Message</motion.button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
