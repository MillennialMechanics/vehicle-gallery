import React from "react";
import { NavLink, Link } from "react-router-dom";

import config from "../../config";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <span className="logo">logo</span>
      <nav>
        <NavLink to="/" exact activeClassName="selected">
          Home
        </NavLink>
        <div className="nav-cars">
          Cars
          <ul>
            {config.map(type => {
              const { name, link } = type;
              return (
                <li key={link}>
                  <Link to={`/type${link}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <NavLink to="/about" activeClassName="selected">
          About Us
        </NavLink>
        <NavLink to="/contact-us" activeClassName="selected">
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
