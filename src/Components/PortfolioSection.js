'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import image43 from '../Images/image43.jpg'
import image53 from '../Images/image53.jpg'
import image15 from '../Images/image15.jpg'
import image27 from '../Images/image27.jpg'

const projects = [
  { id: 1, image: image43, },
  { id: 2, image: image53,  },
  { id: 3, image: image15,  },
  { id: 4, image: image27,  },
]

export default function PortfolioSection() {
  const { ref } = useInView({
    triggerOnce: true,
  })

  return (
    <section ref={ref} style={sectionStyle}>
      <h2 style={headingStyle}>Latest Projects</h2>

      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>

      <div style={buttonContainerStyles}>
        <a className="cta-button" href="/portfolio" rel="noopener noreferrer">
          Explore More Projects
        </a>
      </div>
    </section>
  )
}

// Styles
const sectionStyle = {
  backgroundColor: '#032825',
  padding: '20px',
  borderRadius: '5px',
}

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#98760B',
  textAlign: 'center',
}

const buttonContainerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "1em",
}

const css = `
/* Portfolio Grid */
.portfolio-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px;
  justify-content: center;
}

/* Project Card */
.project-card {
  text-align: center;
  color: white;
  padding: 10px;
}

.project-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
}

.project-title {
  margin-top: 10px;
  color: #98760B;
}

/* CTA Button */
.cta-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #98760B;
  color: #f5f5dc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
}

/* Media Queries */
@media (max-width: 1024px) {
  .portfolio-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
  }
}

@media (max-width: 768px) {
  .portfolio-container {
    grid-template-columns: repeat(1, 1fr); /* 1 column on mobile */
  }
}
`

const styleElement = document.createElement("style")
styleElement.textContent = css
document.head.appendChild(styleElement)
