import React from 'react'
import logo from '../images/other/logo.png'
import '../stylesheets/Sidebar.css'
import hamburger from '../images/icons/hamburger.png'
import close from '../images/icons/close.png'

function Sidebar({sidebar, openSidebar}) {
  return (
    <div className={sidebar? 'sidebar-show': 'sidebar'}>
        <img src={sidebar? close: hamburger} alt='hamburger' className='menu' onClick={openSidebar}/>
        <div className='container'>
        <div className='logo'>
        <img src={logo} alt='logo' className='logo-image'/>
        </div>
        <div className='sidebar-buttons'>
            <ul className='sidebar-lists'>
                <li className='list-items'>How it works</li>
                <li className='list-items'>About us</li>
                <li className='list-items'>Services</li>
                <li className='log'>Log in</li>
                <li className='sign'>Sign up</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar