'use client'
import { useState } from 'react'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import image7 from '../Images/image7.jpg'
import image8 from '../Images/image8.jpg'
import image9 from '../Images/image9.jpg'
import image10 from '../Images/image10.jpg'
import image11 from '../Images/image11.jpg'
import image12 from '../Images/image12.jpg'
import image13 from '../Images/image13.jpg'
import image14 from '../Images/image14.jpg'
import image15 from '../Images/image15.jpg'
import image16 from '../Images/image16.jpg'
import image17 from '../Images/image17.jpg'
import image18 from '../Images/image18.jpg'
import image19 from '../Images/image19.jpg'
import image20 from '../Images/image20.jpg'
import image21 from '../Images/image21.jpg'
import image22 from '../Images/image22.jpg'
import image23 from '../Images/image23.jpg'
import image24 from '../Images/image24.jpg'
import image25 from '../Images/image25.jpg'
import image26 from '../Images/image26.jpg'
import image27 from '../Images/image27.jpg'
import image28 from '../Images/image28.jpg'
import image29 from '../Images/image29.jpg'
import image30 from '../Images/image30.jpg'
import image31 from '../Images/image31.jpg'
import image32 from '../Images/image32.jpg'
import image33 from '../Images/image33.jpg'
import image34 from '../Images/image34.jpg'
import image35 from '../Images/image35.jpg'
import image36 from '../Images/image36.jpg'
import image37 from '../Images/image37.jpg'
import image38 from '../Images/image38.jpg'
import image39 from '../Images/image39.jpg'
import image40 from '../Images/image40.jpg'
import image41 from '../Images/image41.jpg'
import image42 from '../Images/image42.jpg'
import image43 from '../Images/image43.jpg'
import image44 from '../Images/image44.jpg'
import image45 from '../Images/image45.jpg'
import image46 from '../Images/image46.jpg'
import image47 from '../Images/image47.jpg'
import image48 from '../Images/image48.jpg'
import image49 from '../Images/image49.jpg'




const projects = [
  { id: 1,  image: image1, category: 'Advertising' },
  { id: 2,  image: image2, category: 'Brand Design' },
  { id: 3,  image: image3, category: 'Brand Design' },
  { id: 4,  image: image4, category: 'Brand Design' },
  { id: 5,  image: image5, category: 'Brand Identity' },
  { id: 6,  image: image6, category: 'Marketing' },
  { id: 7,  image: image7, category: 'Brand Design' },
  { id: 8,  image: image8, category: 'Marketing' },
  { id: 9,  image: image9, category: 'Marketing' },
  { id: 10, image: image10, category: 'Marketing' },
  { id: 11, image: image11, category: 'Advertising' },
  { id: 12, image: image12, category: 'Brand Design' },
  { id: 13, image: image13, category: 'Marketing' },
  { id: 14, image: image14, category: 'Marketing' },
  { id: 15, image: image15, category: 'Advertising' },
  { id: 16, image: image16, category: 'Brand Design' },
  { id: 17, image: image17, category: 'Brand Design' },
  { id: 18, image: image18, category: 'Brand Design' },
  { id: 19, image: image19, category: 'Brand Design' },
  { id: 20, image: image20, category: 'Brand Design' },
  { id: 21, image: image21, category: 'Advertising' },
  { id: 22, image: image22, category: 'Brand Identity' },
  { id: 23, image: image23, category: 'Brand Identity' },
  { id: 24, image: image24, category: 'Brand Identity' },
  { id: 25, image: image25, category: 'Brand Identity' },
  { id: 26, image: image26, category: 'Marketing' },
  { id: 27, image: image27, category: 'Marketing' },
  { id: 28, image: image28, category: 'Brand Identity'},
  { id: 29, image: image29, category: 'Advertising' },
  { id: 30, image: image30, category: 'Advertising' },
  { id: 31, image: image31, category: 'Advertising' },
  { id: 32, image: image32, category: 'Advertising' },
  { id: 33, image: image33, category: 'Marketing' },
  { id: 34, image: image34, category: 'Brand Design' },
  { id: 35, image: image35, category: 'Brand Identity' },
  { id: 36, image: image36, category: 'Brand Identity' },
  { id: 37, image: image37, category: 'Photo Manipulation' },
  { id: 38, image: image38, category: 'Logo Design' },
  { id: 39, image: image39, category: 'Brand Identity' },
  { id: 40, image: image40, category: 'Advertising' },
  { id: 41, image: image41, category: 'Advertising' },
  { id: 42, image: image42, category: 'Advertising' },
  { id: 43, image: image43, category: 'Advertising' },
  { id: 44, image: image44, category: 'Advertising' },
  { id: 45, image: image45, category: 'Logo Design' },
  { id: 46, image: image46, category: 'Brand Identity' },
  { id: 47, image: image47, category: 'Brand Identity' },
  { id: 48, image: image48, category: 'Logo Design' },
  { id: 49, image: image49, category: 'Logo Design' },


  
]

export default function PortfolioSection() {
  const { ref } = useInView({ triggerOnce: true })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [modalImage, setModalImage] = useState(null) // State to handle popup image

  const categories = ['All', ...new Set(projects.map(project => project.category))]
  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory)

  const projectsByCategory = filteredProjects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = []
    acc[project.category].push(project)
    return acc
  }, {})

  return (
    <section ref={ref} style={sectionStyle}>
      {/* Category Buttons */}
      <div style={categoryButtonStyle}>
        {categories.map(category => (
          <button
            key={category}
            style={selectedCategory === category ? activeButtonStyle : buttonStyle}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display projects by category */}
      {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
        <div key={category} style={category === selectedCategory || selectedCategory === 'All' ? {} : { display: 'none' }}>
          <h2 style={categoryTitleStyle}>{category}</h2>
          <div style={portfolioStyle}>
            {categoryProjects.map(project => (
              <div key={project.id} style={projectStyle}>
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  style={imageStyle}
                  onClick={() => setModalImage(project.image)} // Open modal on click
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for image preview */}
      {modalImage && (
    <div style={modalOverlayStyle} onClick={() => setModalImage(null)}>
        <div style={{...modalContentStyle, display: 'flex', alignItems: 'center'}}> 
            <img src={modalImage} alt="Preview" style={modalImageStyle} />
            
            {/* <div style={{marginLeft: '20px'}}> 
                <p style={{ color: 'white', textAlign: 'justify' }}>This design was inspired by a partnership.</p>
                <div style={buttonContainerStyles}>
                    <button style={ctaButtonStyle} onClick={() => setModalImage(null)}> 
                        Back
                    </button>
                </div>
            </div> */}

        </div>
    </div>
)}
    </section>
  )
}


// const buttonContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
//   gap: "1em",
  
// }
// const ctaButtonStyle = {
//   marginTop: '20px',
//   padding: '10px 20px',
//   backgroundColor: '#98760B',
//   color:'#032825',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   fontWeight: "600",
// }

// Styles
const categoryButtonStyle = {
  display: 'flex',
  justifyContent: 'center', 
  gap: '10px',
  flexWrap: 'wrap', 
  marginBottom: '20px', 
};

const buttonStyle = {
  backgroundColor: ' #98760B',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'background-color 0.3s ease', 
};

const activeButtonStyle = {
  backgroundColor: '#f5f5dc', 
  color: '#000',
};

const sectionStyle = {
  backgroundColor: ' #032825',
  padding: '60px',
  borderRadius: '5px',
 
};

// Responsive grid layout
const portfolioStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Adjusts automatically
  gap: '20px',
};

// Individual project container
const projectStyle = {
  margin: '10px',
  textAlign: 'center',
  color: 'white',
};


const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
};


const titleStyle = {
  marginTop: '10px',
  color: ' #98760B',
};

const categoryTitleStyle = {
  color: ' #f5f5dc',
  fontSize: '1.5em',
  fontWeight: 'bold',
  marginTop: '20px',
  marginBottom: '10px',
  textAlign: 'center',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
}

const modalContentStyle = {
  maxWidth: '90%',
  maxHeight: '90%',
}

const modalImageStyle = {
  width: '40%',
  height: '50%',
  borderRadius: '5px',
  align: 'center',
  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.2)',
}

const responsiveStyles = `
  @media (max-width: 768px) {
    .portfolio-container {
      padding: 10px;
    }
    .portfolio-grid {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .category-button {
      flex-wrap: wrap;
    }
    .category-title {
      font-size: 1.2em;
    }
  }

  @media (max-width: 480px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
    }
    .category-button {
      flex-direction: column;
      align-items: center;
    }
    .button {
      width: 80%;
    }
  }
`;

// Inject media queries into the page
const styleElement = document.createElement('style');
styleElement.innerHTML = responsiveStyles;
document.head.appendChild(styleElement);

