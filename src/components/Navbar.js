//dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

//images & icons
import logo from '../images/other/logo.png'
import hamburger from '../images/icons/hamburger.png'
import close from '../images/icons/close.png'

//stylesheets
import '../stylesheets/Navbar.css'

//components
import Sidebar from './Sidebar'

function Navbar() {
    const { sidebar, setSidebar, openSidebar } = useGlobalContext();
  return (
    <div className='navbar-container'>
        <Link to='/'>
            <img src={logo} alt='logo' className='navbar-logo' />
        </Link>
        <div className='navbar-links'>
            <Link to='/howitworks' className='button-links'>How it works</Link>
            <Link to='/about' className='button-links'>About Us</Link>
            <Link to='/services' className='button-links'>Services</Link>
            <Link to='/login' className='button-links primary'>Log in</Link>
            <Link to='/signup' className='button-links secondary'>Sign Up</Link>
            <img src={sidebar?close:hamburger} alt='menu' onClick={openSidebar} className='menu-style'/>
        </div>
        <Sidebar sidebar={sidebar} openSidebar={openSidebar}/>
    </div>
  )
}

export default Navbar