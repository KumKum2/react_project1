import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/banner1.jpg'
import img2 from '../assets/banner2.jpg'
import img3 from '../assets/banner3.jpg'
const Services = () => {
    return (
        <div className='services'>
            <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} interval={3000} showIndicators={false}>
                <div>
                    <img src={img1} alt='item1' />
                    <p className='legend'>Java script Servise</p>
                </div>
                <div>
                    <img src={img2} alt='item1' />
                    <p className='legend'>Java script Servise</p>
                </div>
                <div>
                    <img src={img3} alt='item1' />
                    <p className='legend'>Java script Servise</p>
                </div>
            </Carousel>


        </div>
    )
}

export default Services;