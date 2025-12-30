import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container">
        <nav className="nav-inner">
          {/* Logo (desktop) */}
          <NavLink to="/" aria-label="Go to homepage">
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
          </NavLink>

          {/* Links */}
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
    </header>
  );
}
