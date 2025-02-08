'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Resume from './Resume'



export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} style={sectionStyle}>
      <div style={containerStyle}>

        
          <h2 style={headingStyle}>About Me</h2>
          <p style={paragraphStyle}>
            As a skilled graphic designer with hands-on experience in Canva, Photoshop, and other design tools, I excel at creating visually appealing and professional materials.
            I am a highly organized and resourceful Virtual Assistant with proven expertise in time management, administrative support, and digital tools. My experience includes managing schedules, handling correspondence, designing marketing assets, and streamlining workflows to enhance productivity.
          </p>
        </div>
      
      <div style={buttonContainerStyles}>
          <a button style={ctaButtonStyle}         
              href="https://drive.google.com/file/d/1Xki5QFwDpzc9czcjevyIx59olIsApLRC/view?usp=drivesdk"
              download="JOHN JUMA_CV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
      </div>
    <Resume />
    </section>
  )
}

const sectionStyle = {
  backgroundColor: '#f5f5dc',
  padding: '20px 0',
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
}


const headingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#032825',
  align: 'justify',
}

const paragraphStyle = {
  fontSize: '1rem',
  color: 'black',
}

const buttonContainerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "1em",
  
}
const ctaButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#98760B',
  color:'#032825',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: "600",
}
// ctaButtonStyle[':on hover'] = {
//   backgroundColor: "white",
  
// };