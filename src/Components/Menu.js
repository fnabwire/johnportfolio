// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {useEffect } from 'react';

// const Menu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMenuVisible, setIsMenuVisible] = useState(false); // Track menu visibility

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Show/hide menu on scroll
//   const handleScroll = () => {
//     const scrollY = window.scrollY; // Get current scroll position
//     const shouldBeVisible = scrollY > 100; // Adjust threshold as needed
//     setIsMenuVisible(shouldBeVisible);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []); // Add event listener on component mount, remove on unmount

//   return (
//     <header className="header">
//       <div className="container flex items-center justify-between">
//         {/* Hamburger Menu Button */}
//         <button
//           className="menu-toggle"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="hamburger-icon"></span>
//         </button>

//         {/* Navigation */}
//         <nav
//           className={`header-nav ${isMenuOpen ? 'open' : ''}`}
//           style={{ visibility: isMenuVisible ? 'visible' : 'hidden' }} // Conditionally show/hide menu
//         >
//           <ul className="menu">
//             <li><Link to="/home" className="header-nav-link">Home</Link></li>
//             <li><Link to="/about" className="header-nav-link">About</Link></li>
//             <li><Link to="/hire-me" className="header-nav-link">Hire Me</Link></li>
//             <li><Link to="/portfolio" className="header-nav-link">Portfolio</Link></li>
//             <li><Link to="/contact" className="header-nav-link">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* Floating Menu (Nine Dots) */}
//         <button className="floating-menu-toggle" onClick={toggleMenu}>
//           <span className="dot"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Menu;

// /* Header styles */
// const css = `
// .header {
//   padding: 0.25rem 0;
//   background-color: #032825;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   position: sticky;
//   top: 0;
//   z-index: 100;
// }

// .header .container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// /* Navigation */
// .header-nav ul {
//   display: flex;
//   gap: 1rem;
// }

// .header-nav-link {
//   color: white;
//   font-weight: 500;
//   text-decoration: none;
//   padding: 0.5rem 1rem;
//   border-radius: 0.25rem;
//   transition: all 0.3s ease;
// }

// .header-nav-link:hover {
//   color: #032825;
//   background-color: rgba(255, 255, 255, 0.1);
// }

// /* Hamburger Menu */
// .menu-toggle {
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;
// }

// .menu-toggle .hamburger-icon {
//   width: 24px;
//   height: 2px;
//   background-color: white;
//   position: relative;
//   transition: all 0.3s ease;
// }


// `;
// const styleElement = document.createElement("style");
// styleElement.textContent = css;
// document.head.appendChild(styleElement);
