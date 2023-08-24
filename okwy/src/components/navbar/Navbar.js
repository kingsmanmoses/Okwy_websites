import React, { useState } from 'react';
import img from '../../img/p-tech-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  // for the nav menu click function
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    // For the navigation
    <nav>
      <Link to="/">
        <img className="nav-logo" src={img} alt="" />
      </Link>

      {/* for the mobile icons */}
      <div className="menu-icons" onClick={handleclick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <div className="nav">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
