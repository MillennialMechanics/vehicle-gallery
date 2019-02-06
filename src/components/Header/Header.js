import React from "react";
import { Link } from "react-router-dom";

import config from "../../config";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <span className="logo">logo</span>
      <nav>
        <Link to="/">Home</Link>
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
        <Link to="/about">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
