import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header className={`header ${isScrolled ? "hidden" : ""}`}>
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="menu">
            <li><Link to="/home" className="header-nav-link">Home</Link></li>
            <li><Link to="/about" className="header-nav-link">About</Link></li>
            <li><Link to="/portfolio" className="header-nav-link">Portfolio</Link></li>
          </ul>
        </nav>
      </header>

      {/* Floating Waffle Menu */}
      <button className="floating-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="waffle-icon" />
      </button>

      {/* Mobile Navigation (appears when menu is open) */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li><Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

// CSS
const css = `
/* Hide header on scroll */
.header {
  background-color: #f5f5dc;
  padding: 1em;
  color: #032825;
  width: 100%;
  position: non-stickey;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

.header.hidden {
  transform: translateY(-100%);
}

/* Navigation */
.header-nav {
  display: flex;
  justify-content: center;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2em;
}

.header-nav-link {
  color: #98760B;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: color 0.3s ease-in-out;
}

.header-nav-link:hover {
  text-decoration: underline;
  color: #032825;
}

/* Floating Waffle Menu (Centered at Bottom) */
.floating-menu {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #98760B;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 15%;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.floating-menu:hover {
  transform: translateX(-50%) scale(1.1);
}

.waffle-icon {
  font-size: 24px;
}

/* Mobile Navigation (Appears when menu is open) */
.mobile-nav {
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5dc;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav li {
  margin: 10px 0;
  text-align: center;
}

.mobile-nav a {
  text-decoration: none;
  color: #032825;
  font-weight: bold;
  font-size: 1.2em;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .header-nav.open .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
`;

// Inject CSS dynamically
const styleElement = document.createElement("style");
styleElement.textContent = css;
document.head.appendChild(styleElement);
