import React from 'react';
import vg from "../assets/catch-hand.jpg";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
   <>
     <div className='home' id='home'>
        <main>
            <h1>TechBee</h1>
            <p>This is Home Page </p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt='Graphics' />
            <div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h3>Who we are?</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h3> Brands</h3>
            <article>
                <div style={{animationDelay:"0.3s",}}>
                    <AiFillGoogleCircle />
                    <p>Google </p>
                </div>

                <div style={{animationDelay:"0.5s",}}>
                    <AiFillAmazonCircle />
                    <p>Amazon </p>
                </div>

                <div style={{animationDelay:"0.7s",}}>
                    <AiFillYoutube />
                    <p>You Tube </p>
                </div>

                <div style={{animationDelay:"1s",}}>
                    <AiFillInstagram />
                    <p>Instagram </p>
                </div>
            </article>
        </div>
    </div>
   
   </>
  )
}

export default Home;