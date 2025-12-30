import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between align-items-center py-3">
        <img
          src="/images/logo.png"
          className="logo d-none d-md-block"
          alt="Tshilidzi logo"
        />
        <img
          src="/images/small.jpg"
          className="logo d-block d-md-none"
          alt="Tshilidzi logo"
        />

        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
