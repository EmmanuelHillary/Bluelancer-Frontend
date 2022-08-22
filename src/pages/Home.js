//dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

//components
import Stylists from '../components/Stylists'
import Loading from '../components/Loading'
import Testimonial from '../components/Testimonial'

//stylesheets
import '../stylesheets/Home.css'

//images & icons
import barber from '../images/other/barber.png'
import fbarber from '../images/other/female-barber.png'
import join from '../images/other/join.png'
import right from '../images/icons/arrow-right.png'
import time from '../images/other/time-manage.png'
import savings from '../images/other/savings.png'
import name from '../images/icons/name.png'
import address from '../images/icons/address.png'
import booking from '../images/icons/booking.png'

function Home() {
  const { homeInput, setHomeInput, stylist, loading } = useGlobalContext()

  return (
    <div className='homepage'>
      <section className='hero'>
        <div className='hero-content'>
          <h1 className='hero-title'>The Revolutionized <span style={{color: '#2E51E4'}}>barbing & hairdressing</span> shop.</h1>
          <p className='hero-body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          </p>
          <button className='hero-button'>Get Started</button>
        </div>
        <img src={barber} alt='barber-icon' className='hero-image' />
      </section>
      <section className='why-bluelancer'>
        <div className='bluelancer-links'>
            <Link to='/why-bluelancer' className='linkone'>Why choose Bluelancer</Link>
            <Link to='/benefits' className='linktwo'>View all benefits<img src={right} alt='right-arrow' /></Link>
        </div>
        <div className='more-bluelancer'>
          <div className='reason'>
            <img src={time} alt='save-time' />
            <div className='reason-content'>
              <h3>Save time at the saloon</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor purus volutpat lectus </p>
            </div>
          </div>
          <div className='reason'>
            <img src={savings} alt='save' />
            <div className='reason-content'>
              <h3>Earn as a bluelancer, save money as a user.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor purus volutpat lectus </p>
            </div>
          </div>
        </div>
        <section className='search'>
          <h2>Search for available stylists</h2>
          <form className='details-pane'>
            <div className='input-field'>
              <input type='text' className='text-field' placeholder='Name' value={homeInput.name} onChange={(e)=> setHomeInput({...homeInput, name: e.target.value})}/>
              <img src={name} alt='name' />
            </div>
            <div className='input-field'>
              <input type='text' className='text-field' placeholder='Address' value={homeInput.address} onChange={(e)=> setHomeInput({...homeInput, address: e.target.value})}/>
              <img src={address} alt='address' />
            </div>
            <div className='input-field'>
              <input type='text' className='text-field' placeholder='Booking time' value={homeInput.time} onChange={(e)=> setHomeInput({...homeInput, time: e.target.value})}/>
              <img src={booking} alt='booking' />
            </div>
            <div className='button-field'>
              <input type='submit' value='Search now'/>
            </div>
          </form>
        </section>
      </section>
      <section className='about-us'>
        <div className='about-content'>
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</p>
          <button>Get started</button>
        </div>
        <img src={fbarber} alt='female-barber' className='secondhero-image'/>
      </section>
      <section className='top-stylists'>

        <h2>Top stylists from last week</h2>
        <div>
          {loading?<Loading />:<Stylists />}
        </div>
      </section>

      <section className='join-us'>
        <div className='join-content'>
          <h2>Join the party!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. olor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</p>
          <p>consectetur adipiscing elit. Lorem ipsum dolor sit amet, adipiscing eli</p>
          <button>Get started</button>
        </div>
        <img src={join} alt='join-us' className='thirdhero-image'/>
      </section>

      <section>
        <Testimonial />
      </section>

      <section className='subscribe'>
        <h3>Subscribe to our newsletter</h3>
        <p>Stay up to date with the latest styling trends straight to your mail</p>
              <form>
                    <div className="details"><input  type="email" placeholder="Enter Email Address" className="eaddress" /><input  type="submit" value="Subscribe" className="submit" /></div>
              </form>
      </section>
      
    </div>
  )
}

export default Home