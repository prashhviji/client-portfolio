 import React from 'react'
 import './navbar.css'
 import logo from '../../assets/logo_1.png'
 import contact from '../../assets/contact.png'
 import {Link} from 'react-scroll';

 const Navbar = () => {
   return (
     <div>
    <nav className="navbar">
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>


        </div>
        <button className="desktopMenuBtn">
            <img src={contact} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
     </div>
   )
 }
 
 export default Navbar
 