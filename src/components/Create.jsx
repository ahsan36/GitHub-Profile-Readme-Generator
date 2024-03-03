import React from 'react'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Create = () => {
  return (
    <div>
      <div className='text-center py-24 sm:py-24'>
        <div className='pt-15 text-center text-3xl lg:text-5xl font-medium text-sky-900'>
            README generator for your Github
        </div>

        <div className='pt-16 flex flex-col md:flex-row justify-center gap-4 items-center'>
            {[
                ["/profile", github, "Profile"],
                ["/project", linkedin, "Project"],
            ].map(([to, img, name]) => (
                <a key={name} to={to} className='w-52 text-center transition p-8 text-4xl text-sky-400 border-2 rounded-lg'>

                    <img src={img} alt={to} className='w-full hover:scale-[1.05] hover:shadow-custom1 hover:drop-shadow-2xl' />

                    <div className='text-3xl font-semibold pt-3'>{name}</div>
                </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Create
