import React from 'react'
const education = [
    {
      degree: "Bachelor of Science & Engineering (B.Sc)",
      institution: "Daffodil International University",
      year: "2017 - 2021",
      description: "CGPA 3.40 out of 4.00 in Major in Computer Science and Engineering.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (H.S.C.)",
      institution: "Rajendrapur Cantonment Public School and College , Gazipur",
      year: "2013 - 2015",
      description: "Gpa 4.81 out of 5.00 in Science group.",
      icon: "🎓",
    },
    {
      degree: "Secondary School Certificate (S.S.C.)",
      institution: "Rajendrapur Cantonment Public School and College , Gazipur",
      year: "2013",
      description: "Gpa 4.83 out of 5.00 in Science group.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Executive of Digital Advertising",
      company: "SEBPO",
      year: "2021 - Present",
      description: "Founded a digital marketing and advertising agency, delivering tailored solutions.",
      icon: "💼",
    },
    {
      role: "MERN Stack Developer (Intern)",
      company: "Go-Innoviors Technologies Ltd.",
      year: "2020 - 2021",
      description: "Developed and optimized MERN stack applications, enhancing user experience.",
      icon: "💻",
    },
    {
      role: "MERN Stack Development (training)",
      company: "Programming Hero",
      year: "2021 - 2022",
      description: " Learned the MERN stack, including MongoDB, Express.js, ReactJS, Tailwind CSS, JavaScript, and Bootstrap etc.",
      icon: "💻",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
