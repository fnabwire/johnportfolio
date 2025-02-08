'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import Portfolio from '../Components/Portfolio'
import Header from '../Components/Header'
import Footer from '../Components/Footer'



export default function PortfolioPage() {
  const { } = useInView({
    triggerOnce: true,
  })

  return (
    <div>
      <Header/>
      <Portfolio/>
      <Footer/>  
    </div>
    
  )
}

