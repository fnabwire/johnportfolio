'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import image25 from '../Images/image25.jpg'
import image37 from '../Images/image37.jpg'
import image15 from '../Images/image15.jpg'
import image40 from '../Images/image40.jpg'



const projects = [
  { id: 1,  image: image25 },
  { id: 2,  image: image37 },
  { id: 3,  image: image15 },
  { id: 4,  image: image40 },
  
]

export default function PortfolioSection() {
  const { ref } = useInView({
    triggerOnce: true,
  })

  return (
    <section ref={ref} style={sectionStyle}>
    <h2 style={headingStyle}>Latest Projects </h2>

      <div style={portfolioStyle}>
        {projects.map((project) => (
          <div key={project.id} style={projectStyle}>
            <img src={project.image} alt={project.title} style={imageStyle} />
            <h3 style={titleStyle}>{project.title}</h3>
          </div>
        ))}
      </div>

      <div style={buttonContainerStyles}>
      <a button style={ctaButtonStyle}         
              href="/portfolio" rel="noopener noreferrer"> Explore More Projects
      </a>
      </div>
      

    </section>
  )
}

const sectionStyle = {
  backgroundColor: '#032825',
  padding: '20px',
  borderRadius: '5px',
}
const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginTop: '0px',
  marginBottom: '10px',
  color: '#98760B',
  textAlign: 'center',
}

const portfolioStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
  gap: '20px', // Adds space between the items
}

const projectStyle = {
  margin: '10px',
  textAlign: 'center',
  color: 'white',
}

const imageStyle = {
  width: '80%',
  height: 'auto',
  borderRadius: '5px',
}

const titleStyle = {
  marginTop: '10px',
  color: '#98760B',
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
  color:' #f5f5dc',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: "600",
  textDecoration: 'none',
}

// Add media query for smaller screens
const responsiveStyle = {
  '@media (max-width: 768px)': {
    portfolioStyle: {
      gridTemplateColumns: '1fr', // 1 column on smaller screens
    },
  },
}
