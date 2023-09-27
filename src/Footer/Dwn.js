import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";

const Dwn = () => {
    const phoneNumber = "+923455286816"; 
    const whatsappLink = `https://wa.me/${phoneNumber}`
  return (
    <div>
      <footer className="footer">
        <div><p>&copy; {new Date().getFullYear()} Hamza Shopify Store</p></div>
      <div className="footer-line">
            <NavLink  to='/'  className="footer-item white-link">Home</NavLink>
            <NavLink to='/about' className="footer-item white-link">About</NavLink>
            <NavLink to='/contact' className="footer-item  white-link">Contact</NavLink>
          </div>
          <div className="footer-line">
          <a href={`https://wa.me/${phoneNumber}`}  className="white-link">
          <span>+92 3455286816</span>
         </a>
            <div className="footer-item">
              <a href="https://www.instagram.com/talhazia898"  className="white-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
            <div className="footer-item">
              <a href="https://www.facebook.com/Talhaali898"  className='white-link'   target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Dwn;
