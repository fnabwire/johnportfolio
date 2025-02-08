import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import AboutSection from '../Components/AboutSection'
import ContactSection from '../Components/ContactSection'
import Testimonials from '../Components/Testimonials'
import PortfolioSection from '../Components/PortfolioSection'



function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AboutSection/>  
      <PortfolioSection/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
