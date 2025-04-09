import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Home</li>
          <hr />
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>All Doctors</li>
          <hr />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>About</li>
          <hr />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Contact</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <NavLink to="/login">
          <button>Create Account</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
