//dependencies
import React from 'react'
import {Link} from 'react-router-dom'

//stylesheets
import '../stylesheets/Footer.css'

//images & icons
import logo from '../images/other/logo.png'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='logo2'>
            <img src={logo} alt='logo' />
            <p>Best styling experience you can get</p>
        </div>
        <div className='main-footer'>
        <div className='footer-links'>
            <ul>
                <li className='link-header'>Company</li>
                <li className='link-body'><Link to='#'>About us</Link></li>
                <li className='link-body'><Link to='#'>Pricing</Link></li>
                <li className='link-body'><Link to='#'>Features</Link></li>
                <li className='link-body'><Link to='#'>Contact Us</Link></li>
            </ul>
        </div>
        <div className='footer-links'>
            <ul>
            <li className='link-header'>About Us</li>
                <li className='link-body'><Link to='#'>Careers</Link></li>
                <li className='link-body'><Link to='#'>Press and News</Link></li>
                <li className='link-body'><Link to='#'>Patnership</Link></li>
                <li className='link-body'><Link to='#'>Privacy Policy</Link></li>
                <li className='link-body'><Link to='#'>Terms and Service</Link></li>
            </ul>
        </div>
        <div className='footer-links'>
            <ul>
            <li className='link-header'>Contact</li>
                <li className='link-body'>Get connected with</li>
                <li className='link-body'><Link to='#'>Facebook</Link></li>
                <li className='link-body'><Link to='#'>Twitter</Link></li>
                <li className='link-body'><Link to='#'>Instagram</Link></li>
                <li className='link-body'><Link to='#'>LinkedIn</Link></li>
            </ul>
        </div>
    </div>
    <div className='copyright'>
        <h1>2022 Blue <span style={{color: '#2F54EB'}}>Lancer</span>. All right reserved</h1>
    </div>
    </div>
  )
}

export default Footer