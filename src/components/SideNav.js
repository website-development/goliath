import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { ReactSVG } from "react-svg";

const SideNav = ({ setIsActive, isActive }) => {
  return (
    <nav className={cn("sidenav", { active: isActive })}>
      <div className="sidenav__top">
        <img className="sidenav__icon" src="/icons/logo.svg" alt="logo icon" />
        <div className="sidenav__btn" onClick={() => setIsActive(!isActive)}>
          <span className="sidenav__dash"></span>
          <span className="sidenav__dash"></span>
        </div>
      </div>

      <ul className="sidenav__list list">
        <li>
          <NavLink
            className="sidenav__item"
            to="/home"
            activeClassName="sidenav__item--active"
          >
            <ReactSVG src="/icons/home-icon.svg" />
            <span className="sidenav__text">Home</span>
            <img
              className="sidenav__text"
              src="/icons/right-corner.svg"
              alt="right corner"
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            className="sidenav__item"
            to="/projects"
            activeClassName="sidenav__item--active"
          >
            <ReactSVG src="/icons/proccessor-icon.svg" />
            <span className="sidenav__text">Projects</span>
            <img
              className="sidenav__text"
              src="/icons/right-corner.svg"
              alt="right corner"
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            className="sidenav__item"
            to="/admin"
            activeClassName="sidenav__item--active"
          >
            <ReactSVG src="/icons/settings-icon.svg" />
            <span className="sidenav__text">Admin</span>
            <img
              className="sidenav__text"
              src="/icons/right-corner.svg"
              alt="right corner"
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            className="sidenav__item"
            to="/billing"
            activeClassName="sidenav__item--active"
          >
            <ReactSVG src="/icons/credit-card-icon.svg" />
            <span className="sidenav__text">Billing</span>
            <img
              className="sidenav__text"
              src="/icons/right-corner.svg"
              alt="right corner"
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            className="sidenav__item"
            to="/support"
            activeClassName="sidenav__item--active"
          >
            <ReactSVG src="/icons/contact-icon.svg" />
            <span className="sidenav__text">Support</span>
            <img
              className="sidenav__text"
              src="/icons/right-corner.svg"
              alt="right corner"
            />
          </NavLink>
        </li>
      </ul>

      <div>
        <img
          className="sidenav__logout"
          src="/icons/logout-icon.svg"
          alt="logout icon"
        />
      </div>
    </nav>
  );
};

export default SideNav;
