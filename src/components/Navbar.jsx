import React from 'react'
import logo from "../assets/SK9.png"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
           <a href="/" aria-label='Home'>
           <img src={logo} className=''width={130} height={120} alt='logo' />
           </a>
        </div>

    {/* Links */}

  <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

     <a href="https://www.linkedin.com/in/saksham-kanojia-7895b7217/"
     target='_blank' rel='noopener noreferrer'
     aria-label="LinkedIn">
        <FaLinkedin/>
     </a>

     <a href="https://github.com/sakshamkanojia19"
     target='_blank' rel='noopener noreferrer'
     aria-label="GitHub">
        <FaGithub/>
     </a>

  </div>

    </nav>
  )
}

export default Navbar
