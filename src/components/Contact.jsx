import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
const Contact = () => {
  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
        <div className='grid lg:grid-cols-2 gap-10'>
            {/* contact info */}
            <div className='flex flex-col justify-center space-y-8'>
                <div>
                    <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Talk</h1>
                    <p className='text-gray-300 my-5'>I'm currently available for work. If you have any questions or would like to get in touch, please don't hesitate to contact me.</p>
                    <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
                    <p className='text-gray-600 mt-2'>
                        <a href="#" className='text-blue-500 hover:underline'>sohorabhossain9521@gmail.com</a>
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
                    <p className='text-gray-600 mt-2'>
                        <a href="#" className='text-blue-500 hover:underline'>+88 01869113373</a>
                    </p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
                    <div className='flex gap-3 text-2xl transition-all mt-5'>
                        <a href="https://www.facebook.com/sohorabsajib"><FaFacebook className='text-blue-400' /></a>
                        <a href="https://wa.me/+8801869113373?text=Hello%20I%27m%20interested%20in%20your%20work.%20Please%20let%20me%20know%20if%20you%20are%20looking%20for%20a%20job%21"><FaWhatsapp className='text-blue-400' /></a>
                        <a href="https://www.linkedin.com/in/sohorabsajib/"><FaLinkedin className='text-blue-400' /></a>
                        <a href="https://x.com/sohorabhossainx"><FaSquareXTwitter className='text-blue-400' /></a>
                    </div>
                </div>
            </div>
            {/* contact form */}
            <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8'>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
                <form action="" className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                        <input 
                        type="email" 
                        id='email' 
                        className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Your Email' 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-300'>email</label>
                        <input 
                        type="text" 
                        id='name' 
                        className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Your Name' 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                        <textarea 
                        id="messsage" 
                        rows={5} 
                        className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                        placeholder='Your Message'></textarea>
                    </div>
                    <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
