import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark w-100 fixed-top"
      style={{ backgroundColor: "#00378a" }}
    >
      <NavLink className="navbar-brand" to="/home">
        Thye Wong
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact-us">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
