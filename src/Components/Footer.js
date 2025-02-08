import React from 'react'
import BackToTop from './BackToTop'


export default function Footer() {

    return (
      
      <footer style={footerStyle}>
        <div style={containerStyle}>
          
           <p>&copy; {new Date().getFullYear()} John Juma. All rights reserved.</p>
        </div>
        
        <BackToTop/>
      </footer>
    )
}

const footerStyle = {
  backgroundColor: '#98760B',
  color: 'white',
  padding: '10px 0',
}

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px',
  textAlign: 'center',
}


const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  transition: 'color 0.3s',
}

linkStyle[':hover'] = {
  color: '#032825',
}