import React from 'react'
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Navbar = () => {
  return (
    <header className='fixed w-full z-12 transition-all duration-300 bg-gray-200 '>
      {/* <h3>Navbar</h3> */}
      <nav className='flex flex-row justify-between items-center text-2xl p-4 w-full'>

        {/* Logo */}
        <a href='#' className='ml-4'>
            <img src={logo} alt="logo" className='h-10 w-10 hover:scale-90 transition-all'/>
        </a>

        <div className='flex items-center gap-4 mr-4'>
            
            {/* Linkedin logo */}
            <a href="https://www.linkedin.com/in/mdahsanansari/" target='_blank' rel="noopener noreferrer"
            className='transition-all hover:scale-90 flex items-center'
            >
                <img src={linkedin} alt="github" className='h-8 md:h-10'/>
            </a>

            {/* Github logo */}
            <a href="https://github.com/ahsan36/GitHub-Profile-Readme-Generator" target='_blank' rel="noopener noreferrer"
            className='transition-all hover:scale-90 flex items-center'
            >
                <img src={github} alt="linkedin" className='h-8 md:h-10'/>
            </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
