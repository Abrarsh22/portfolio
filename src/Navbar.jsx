import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
import {Link} from "react-scroll"
const Navbar = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg py-10 navbar-light">
  <div className="container-fluid">
    <Link exact className="navbar-brand" to="/">Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link exact className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="nav-item">
          <Link exact className="nav-link" to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="nav-item">
          <Link exact className="nav-link" to="service" smooth={true} duration={500}>Services</Link>
        </li>
        <li className="nav-item">
          <Link exact className="nav-link" to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link exact className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
        </li>

        </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;