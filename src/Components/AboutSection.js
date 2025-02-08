'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const { ref } = useInView({
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
        <a 
          style={ctaButtonStyle} 
          href="about"
          target="_blank" 
          rel="noopener noreferrer"
        >
          More about me
        </a>
      </div>
    </section>
  )
}


const sectionStyle = {
  backgroundColor: '#f5f5dc',
  padding: '20px',
  width: '100%',
  maxWidth: '110vh',
  margin: 'auto',
  height: '55vh',
  textAlign: 'center',
  borderRadius: '5px',
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
}

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#032825',
  textAlign: 'center',
}

const paragraphStyle = {
  fontSize: '1rem',
  color: 'black',
  textAlign: 'center',
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
  color: ' #f5f5dc',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: "600",
  transition: 'all 0.3s ease-in-out',
}

ctaButtonStyle[':hover'] = {
  backgroundColor: 'white',
  color: '#98760B',
}

const mediaQueries = `
  @media (max-width: 1024px) {
    .about-section {
      padding: 15px;
      width: 90%;
    }

    .about-section h2 {
      font-size: 1.8rem;
    }

    .about-section p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .about-section {
      width: 95%;
      padding: 10px;
    }

    .about-section h2 {
      font-size: 1.6rem;
    }

    .about-section p {
      font-size: 0.9rem;
    }

    .cta-button {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .about-section {
      width: 100%;
      padding: 10px;
    }

    .about-section h2 {
      font-size: 1.5rem;
    }

    .about-section p {
      font-size: 0.8rem;
    }

    .cta-button {
      width: 100%;
      font-size: 0.9rem;
    }
  }

`;
const styleElement = document.createElement("style")
styleElement.textContent = mediaQueries
document.head.appendChild(styleElement)
