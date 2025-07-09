import React, {useState} from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import menu_light from '../../assets/menu_light.jpg'; 
import menu_dark from '../../assets/menu_dark.jpg';   
import close_light from '../../assets/close_light.jpg'; 
import close_dark from '../../assets/close_dark.jpg';   


function Navbar({theme, setTheme}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggle_mode = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
    };

  return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_light : logo_dark} alt='' className='logo' />

      <img
        src={
          mobileMenuOpen
            ? (theme === 'light' ? close_light : close_dark) // If menu is open
            : (theme === 'light' ? menu_light : menu_dark)   // If menu is closed
        }
        alt=''
        className='menu-icon'
        onClick={toggleMobileMenu}
      />

      <ul className={mobileMenuOpen ? 'show-mobile-menu' : ''}> 
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder='Search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=''/>
      </div>

      <img onClick={()=>toggle_mode()} src={theme == 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon'/>
    </div>
  )
}

export default Navbar
