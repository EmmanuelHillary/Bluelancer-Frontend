//dependencies
import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

//images & icons
import styler from '../images/stylist.png'

//stylesheets
import '../stylesheets/Stylist.css'

function Stylists() {
    const { stylist, loading } = useGlobalContext()
  return (
    <div className='stylists-container'>
       <div className='top-curve'></div>
       <div className='bottom-curve'></div>
          <div className='overflow-div'>
         {
          stylist.map((person) =>{
            const id = person.id
            return <div className='stylist' key={person.id}>
              <img src={styler} alt='style' className='stylist-image'/>
              <Link to={`/stylist/${id}`} className='stylist-link'> {person.name}</Link>
            </div>
          })
          }
        </div>
    </div>
  )
}

export default Stylists