import React from 'react'
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Navbar = () => {
  return (
    <header className='fixed w-full z-10 transition-all duration-300 bg-black'>
      {/* <h3>Navbar</h3> */}
      <nav className='flex flex-row justify-between items-center text-2xl p-2 w-full'>

        {/* Logo */}
        <a href='#'>
            <img src={logo} alt="logo" className='h-10 w-10 hover:scale-90 transition-all'/>
        </a>

        <div className='flex items-center gap-2'>
            
            {/* Linkedin logo */}
            <a href="https://www.linkedin.com/in/mdahsanansari/" target='_blank' rel="noopener noreferrer"
            className='transition-all hover:scale-90 flex items-center'
            >
                <img src={linkedin} alt="github" className='h-8 md:h-8'/>
            </a>

            {/* Github logo */}
            <a href="https://github.com/ahsan36/GitHub-Profile-Readme-Generator" target='_blank' rel="noopener noreferrer"
            className='transition-all hover:scale-90 flex items-center'
            >
                <img src={github} alt="linkedin" className='h-8 md:h-8'/>
            </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
