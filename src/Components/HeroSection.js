import React from 'react';
import AboutSection from './AboutSection';

const HeroSection = () => {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '60vh',
    backgroundColor: '#032825',
    padding: '2rem',
  };

  const heroContentStyle = {
    textAlign: 'center',
    color: 'white',
    flex: 1,
    padding: '1rem',
    maxWidth: '600px',
  };

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1em',
    marginTop: '20px',
    flexWrap: 'wrap',
  };

  const ctaButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#98760B',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    textDecoration: 'none',
    color: 'white',
    transition: 'all 0.3s ease-in-out',
  };

  const headingStyle = {
    color: '#98760B',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  return (
    <section style={heroStyle}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={heroContentStyle}>
          <h1 style={headingStyle}>Hello, I'm John Juma</h1>
          <p style={{ fontSize: '1.2rem' }}>Graphic Designer | Computer and Electronics Systems Engineer | Virtual Assistant</p>

          <div style={buttonContainerStyles}>
            <a style={ctaButtonStyle} href="#ContactSection" rel="noopener noreferrer">
              Hire Me
            </a>
            <a style={ctaButtonStyle} href="/portfolio" rel="noopener noreferrer">
              Explore My Work
            </a>
          </div>
        </div>
        {/* <AboutSection /> */}
      </div>
    </section>
  );
};

export default HeroSection;

const css = `

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 3rem 1rem;
  }

  .hero-section h1 {
    font-size: 1.8rem;
  }

  .hero-section p {
    font-size: 1.1rem;
  }
}

/* Tablet (768px) */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 2rem 1rem;
    height: auto;
  }

  .hero-section h1 {
    font-size: 1.6rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 12px 18px;
    font-size: 1rem;
  }
}

/* Mobile (480px) */
@media (max-width: 480px) {
  .hero-section {
    text-align: center;
    padding: 2rem 1rem;
  }

  .hero-section h1 {
    font-size: 1.5rem;
  }

  .hero-section p {
    font-size: 0.9rem;
  }

  .button-container {
    flex-direction: column;
    gap: 10px;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }
}

`;
const styleElement = document.createElement("style");
styleElement.textContent = css;
document.head.appendChild(styleElement);  

