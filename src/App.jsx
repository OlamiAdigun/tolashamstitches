import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Outfits from './Components/Outfits/Outfits';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title SubTitle= 'elegance with contemporary' Title='Our Best Fashion Show'/>
        <Outfits/>
        <Title Title='About Us'/>
        <About/>
        <Title SubTitle= 'Gallery' Title='Previous Works'/>
        <Gallery/>
        <Title SubTitle='Gent In Touch With Us' Title='Contact Us'/>
        <Contact/>
      </div>
       <Footer/>
    </div>
  );
}

export default App;
