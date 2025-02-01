import React from 'react'
import AboutImg from '../assets/About.png'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
            {/* img section */}
            <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <img src={AboutImg} alt="" className='w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 '/>
            </div>
            {/* paragraph section */}
            <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <p className='text-lg leading-7 mb-6'>Hi! I'm Sohorab Hossain, a passionate Full-Stack Developer with expertise in the Fortend web developent With a strong foundation in modern web development and an eye for detail, I create elegant, user-friendly web solutions tailored to meet client needs.</p>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
                    <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Next.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind Css</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Redux</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Node.js</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Github</p>
                    </div>
                    <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight/></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
