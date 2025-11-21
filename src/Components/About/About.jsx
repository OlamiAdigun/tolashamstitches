import React from 'react';
import './About.css'
import mylove from '../../assets/love-2.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about container' id='About'>
        <div className="about-left">
            <img src={mylove} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>Tosham Stitches</h3>
            <h2>Where Art Meets Fashion</h2>
            <p>At the heart of our brand is a passion for creating fashion that feels both meaningful and memorable. Founded by Mrs Tolani Balogun, we believe clothing is more than what you wear, it is a reflection of identity, confidence, and individuality.</p>
            <p>Our journey began with a love for craftsmanship and a desire to blend modern style with timeless elegance. Every piece we create is thoughtfully designed, carefully sourced, and brought to life with meticulous attention to detail. From concept to finish,with focus on quality. We’re proud to create fashion that empowers, inspires, and celebrates you.</p>
        </div>
      
    </div>
  );
}

export default About;
