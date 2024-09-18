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
// import HeroSection from './components/HeroSection/Hero';
// import Menus from './components/Menus/Menus';
// import Banner from './components/Banner/Banner';
// import Banner2 from './components/Banner/Banner2';
// import Banner3 from './components/Banner/Banner3';
// import Footer from './components/Footer/Footer'
// import FeatureSection from './components/FeatureSection'
// import Workflow from './components/WorkFlow'
// import Pricing from './components/Pricing'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

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
    {/* <HeroSection />
    <Menus />
    <Banner />
    <Banner2 />
    <Banner3 />
    <Footer />  */}
    {/* <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer /> */}
    </div>
    
  )
}

export default App;