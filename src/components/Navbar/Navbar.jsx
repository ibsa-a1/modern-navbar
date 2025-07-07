import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img src='' alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder='Search' />
        <img src='' alt=''/>
      </div>

      <img src='' alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar
