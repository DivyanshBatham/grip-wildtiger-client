import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container container">
        <Link to="/" className="nav-logo">
          Wild Tiger
        </Link>
        <ul className="main-nav">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/bar">Bar</NavLink></li>
          <li><NavLink to="/reservation">Reservation</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
