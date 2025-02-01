import React from 'react'
import IMDB from '../assets/imdb.png'
import GYM from '../assets/gym.png'
import Doctor from '../assets/doctor.png'
import Phone from '../assets/phone.png'
import Mubarak from '../assets/mubarak.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
          title: "Doctor Portal",
          description:
            "A site to book doctor appointments.",
          techStack: ["React.js", "Firebase",  "Tailwind CSS"],
          link: "https://64c588c223a9c3277120598a--chipper-sundae-20c1c8.netlify.app/",
          github: 'https://github.com/sohorabsajib/doctor-portal',
          image: Doctor, // Replace with your project screenshot
        },
        {
          title: "IMDB Clone",
          description:
            "Created a movie site showcasing the latest films and their popularity.",
          techStack: ["NextJS", "API", "Tailwind CSS","daisyUI"],
          link: "https://imdb-clone100.vercel.app/",
          github: 'https://github.com/sohorabsajib/imdb',
          image: IMDB, // Replace with your project screenshot
        },
        {
          title: "My Phone Shop",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
          techStack: ["React.js", "Firebase", "Tailwind CSS"],
          link: "https://my-phone-shop-three.vercel.app/",
          github: 'https://github.com/sohorabsajib/MyPhoneShop',
          image: Phone, // Replace with your project screenshot
        },
        {
          title: "Dr.MubarakAhmadProtfolio",
          description:
            "Created a professional portfolio for Scientist Dr. Mubarak Ahmad Khan.",
          techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          link: "https://sohorabsajib.github.io/Dr.MubarakAhmadProtfolio/index-static.html",
          github: 'https://github.com/sohorabsajib/Dr.MubarakAhmadProtfolio',
          image: Mubarak, // Replace with your project screenshot
        },
        {
          title: "Gym Club",
          description:
            "Created a professional portfolio for Scientist Dr. Mubarak Ahmad Khan.",
          techStack: ["React.js", "CSS", "Framer Motion", "React Router"],
          link: "https://monumental-gnome-ca611d.netlify.app/",
          github: 'https://github.com/sohorabsajib/Gym-club',
          image: GYM, // Replace with your project screenshot
        },
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project
