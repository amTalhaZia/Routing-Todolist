import React from "react";
import { NavLink } from "react-router-dom";
import "./Pages/Navbar.css";

const Navbar = () => {
  const activestyle = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "red",
  };

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activestyle={activestyle} >
          Home
        </NavLink>
        <span className="nav-link-margin" />
        <NavLink to="/about" className="nav-link" activestyle={activestyle}>
          About
        </NavLink>
        <span className="nav-link-margin" />
        <NavLink to="/contact" className="nav-link" activestyle={activestyle} >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
