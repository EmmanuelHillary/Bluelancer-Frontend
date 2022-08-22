//dependencies
import React from 'react'
import data from '../dummyData'
import { Link } from 'react-router-dom'

//stylesheets
import '../stylesheets/Testimonial.css'

//images & icons
import upcurve from '../images/icons/up-curve.png'
import downcurve from '../images/icons/down-curve.png'
import dots from '../images/icons/dots.png'
import next from '../images/icons/next.png'
import prev from '../images/icons/prev.png'
import right from '../images/icons/arrow-right.png'
import star from '../images/icons/star.png'
import quote from '../images/icons/quote.png'

function Testimonial() {
    const [people, setPeople] = React.useState([{
        id: 1,
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',
        quote:
          'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
      }])

  return (
    <div >
        {people.map((item) =>{
            return <div className='testimonial-container' key={item.id}>
                <div className='image-half'>
                    <img src={downcurve} alt='down' className='down'/>
                    <img src={item.image} alt='test-img' className='test-img'/>
                    <img src={upcurve} alt='up' className='up'/>
                    <img src={dots} alt='fots' className='dots'/>
                    <img src={next} alt='next' className='next'/>
                    <img src={prev} alt='prev' className='prev'/>
                </div>
                <div className='details-half'>
                    <div className='test-title'>
                        <h3>Testimonials</h3>
                        <Link to='/benefits' className='linkthree'>View all benefits<img src={right} alt='right-arrow' /></Link>
                    </div>
                    <p className='details-paragraph'>
                        Check what our users have to say about using BlueLancer.
                    </p>
                    <div className='iconz'>
                        <img src={quote} alt='quote' className='quote'/>
                        <img src={star} alt='star' className='star'/>
                    </div>
                    <p className='quote-text'>{item.quote}</p>
                    <h4 className='quote-name'>{item.name}</h4>
                    
                </div>
            </div>
        })}
    </div>
  )
}

export default Testimonial