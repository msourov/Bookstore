import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className='links'>
            <li className='list-item'>Home</li>
            <li className='list-item'>About</li>
            <li className='list-item'>Products</li>
        </ul>
        <div className='social-media-links'>
          <div className="icon-container">
          <img src="/square-facebook.svg" alt="Facebook Icon" className='icon'/>
          <span className='icon-text'>Facebook</span>
          </div>
          <div className="icon-container">
          <img src="/square-instagram.svg" alt="Instagram Icon" className='icon'/>
          <span className='icon-text'>Instagram</span>
          </div>
          <div className="icon-container">
          <img src="/square-x-twitter.svg" alt="Twitter Icon" className='icon'/>
          <span className='icon-text'>Twitter</span>
          </div>
        </div>
      </div>
      <p className='copyright'>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
  )
}
