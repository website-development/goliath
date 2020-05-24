import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="underline"></div>
      <ul className="navbar-nav">
        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/projectHome"
            exact
          >
            <span style={{ lineHeight: "100%" }}>Proyect Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/projectQuality"
          >
            <span>Quality</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/projectEnrichment"
          >
            <span>Enrichment</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/projectModel"
          >
            <span>Model Execution</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/projectBusiness"
          >
            <span>Business Case</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/projectSimulation"
          >
            <span>Simulation</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
