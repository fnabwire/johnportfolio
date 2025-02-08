import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up
    };
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa fa-chevron-up"></i>  
    </button>
  );
};

export default BackToTop;

const css = `
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #98760B;
  color: white;
  padding: 15px 20px; 
  border-radius: 8px;
  border: none; 
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s;
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #F5F5DC;
}

.back-to-top.show {
  opacity: 1;
}

.back-to-top .fa-chevron-up {
  color: black; 
  font-size: 20px; 
`;

const styleElement = document.createElement("style");
styleElement.textContent = css;
document.head.appendChild(styleElement);
