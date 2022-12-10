import React from 'react'
import backlaw from '../assets/lawBack2.jpg'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import {MdOutlineGavel} from 'react-icons/md'
import {AiOutlineLine} from 'react-icons/ai'
import AboutCard from '../Components/AboutCard'
import AwardCard from '../Components/AwardCard'

const About = () => {
  const cardData = [
    {
      id: 1,
      title: 'Knowledgeable',
      text: 'Our attorneys are the best around who are highly skilled'
    },
    {
      id: 2,
      title: 'Employment & labor law',
      text: 'We had 20 years of experience in handling tough cases'
    },
    {
      id: 3,
      title: 'Affordable Fees',
      text: 'Clients will be receive the best services at a reasonable fee'
    },
    {
      id: 4,
      title: 'Quick & Positive Result',
      text: 'We reached success in even complex litigation cases'
    },
    {
      id: 5,
      title: 'Good Reputation',
      text: 'We are a well-known law firm in 50 nations and territories'
    },
    {
      id: 6,
      title: 'Free Consultation',
      text: 'You will receive consultancy without paying any fee'
    }
  ]

  const awardData = [
    {
      id: 1,
      title: 'Firm of The Year',
      year: '2019'
    },
    {
      id: 2,
      title: 'Client Service excellence',
      year: '2020'
    },
    {
      id: 3,
      title: 'Top Law Firm of Year',
      year: '2021'
    },
    {
      id: 4,
      title: 'Outstanding Law Firm',
      year: '2019'
    },
    {
      id: 5,
      title: 'Finance Law Firm',
      year: '2018'
    },
    {
      id: 6,
      title: 'Best legal firm',
      year: '2022'
    }
  ]
  return (
    <div className='text-lg'>
      <div className='relative'>
        <img src={backlaw} className='w-screen h-80 lg:h-96 lg:object-cover'/>
        <div className='absolute flex flex-col justify-center 
        items-center top-0 right-0 left-0 
        bottom-0 text-white w-5/6 mx-auto text-center'>
          <p className='text-4xl mt-5 lg:text-5xl font-playfair border-b-2 border-yellow-600 pb-3'>About Us</p>
        </div>
      </div>

      <div className='my-28 mx-auto w-5/6 lg:flex gap-28 items-center'>
        <div>
          <img alt='meeting' src={about1} className="lg:h-72 rounded-xl shadow-md"/>
          <img alt='meeting' src={about2} className="lg:h-72 mt-7 lg:-mt-52 lg:ml-20 rounded-xl shadow-md"/>
        </div>
        <div className='lg:w-3/6 mt-12 lg:mt-0'>
          <p className='flex gap-3 mb-3 items-center font-semibold text-xl'>
            <MdOutlineGavel className='text-yellow-600'/>About Our Company <AiOutlineLine className='text-yellow-600'/>
          </p>
          <p className='lg:text-5xl text-4xl font-black lg:w-5/6'>Our Rich History</p>
          <p className='italic mt-9'>Our company is focused on handling litigation cases about business. As the firm’s reputation were growing, the firm hired several associates.</p>
          <p className='italic  mt-2'>“In 20 years since the firm’s founding, Reno Attorneys grew steadily, hiring some of the best and brightest associates and staff to meet LGC’s expanding client needs”</p>
          <p className='italic  mt-2'>At the present, we are expanding our practice areas with 6 primary fields.</p>
        </div>
      </div>

      <div className='my-40 w-5/6 mx-auto lg:flex flex-wrap gap-12 justify-center'>{cardData.map(n => {
        return <AboutCard key={n.id} {...n}/>
      })}</div>

      <div className='w-5/6 mx-auto my-20'>
        <p className='flex lg:justify-center gap-3 items-center font-semibold text-xl'>
            <MdOutlineGavel className='text-yellow-600'/>Achievements <AiOutlineLine className='text-yellow-600'/>
        </p>
        <div className='mt-4 gap-20'>
            <p className='lg:text-5xl lg:text-center text-4xl font-black lg:w-5/6 mx-auto'>Our Awards and Honors</p>
            <p className='text-slate-800 mt-5 text-lg lg:text-center'>We've achieved many national awards for our success and effort</p>
        </div>

        <div className='flex justify-center gap-6 flex-wrap text-lg mt-10'>
            {awardData.map(n=>{
              return <AwardCard key={n.id} {...n} />
            })}
        </div>
      </div>
    </div>
  )
}

export default About
