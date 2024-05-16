import React, { useState } from "react";
import "./navbar.css"
import { img1, imgs, menu } from "../../asset/image";
import { Link } from 'react-scroll';


const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  

  return (
    <>
    <div className="navbar">
        <img 
        src={imgs}
        alt="logo"
        className="logo"
        />
        <div className="desktopMenu">
            
            <Link activeClass="active" to="intros" spy={true} smooth={true} offset={-100} duration={500} className="MeanuLink"> Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="MeanuLink">About</Link>
            <Link activeClass="active" to="main-div" spy={true} smooth={true} offset={-50} duration={500} className="MeanuLink">Portfolio</Link>
            <Link  activeclass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="MeanuLink"> Clients  </Link>
        </div>
        <button className="button" onClick={() =>{
          document.getElementById('Contact').scrollIntoView({behavior: 'smooth'})
        }}>
        <img src={img1} alt="contact" className="contactImg"/> Contact Me
        </button>
        <img src={menu} alt="menu" className="mobMenu bg-gray-200 rounded-xl" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{ display: showMenu? 'flex':'none'}} >
            <Link activeClass="active" to="intros" spy={true} smooth={true} offset={-100} duration={500} className="listitem"onClick={()=>setShowMenu(false)}> Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to="main-div" spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link  activeclass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>setShowMenu(false)}> Clients  </Link>
            <Link  activeclass="active" to="Contact" spy={true} smooth={true} offset={-50} duration={500} className="listitem"onClick={()=>setShowMenu(false)}> Contact  </Link>
        </div>
        

    </div>
    </>
  );
};

export default Navbar;