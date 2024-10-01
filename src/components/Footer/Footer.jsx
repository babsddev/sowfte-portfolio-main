import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href='#home' className='footer_logo'>
        Babagbemi Ajayi
      </a>
      <ul className='permalink'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer_copywrite'>
        <small>&copy; www.sowfte.com</small>
      </div>
    </footer>
  )
}

export default Footer
