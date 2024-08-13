import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyGallery</div>
      <ul className="nav-links">
        <li><a href="#">Home <i className="fa fa-home"></i></a></li>
        <li><a href="#">Gallery <i className="fa fa-image"></i></a></li>
        <li><a href="#">Contact <i className="fa fa-envelope"></i></a></li>
        <li><a href="#">About <i className="fa fa-info-circle"></i></a></li>
      </ul>
      <div className="nav-hamburger">
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;
