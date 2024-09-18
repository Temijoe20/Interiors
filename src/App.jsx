import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Brands from './components/Brands/Brands';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='overflow-x-hidden bg-white'>
    <Navbar />
    <Hero />
    <Brands />
    <Services />
    <Banner />
    <Banner2 />
    <Testimonials />
    <Newsletter />
    <Footer />
    </div>
    
  )
}

export default App;