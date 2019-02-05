import React from "react";
import { Link } from "react-router-dom";

import config from "../../config";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <div>
          {config.map(type => {
            const { name, link } = type;
            return (
              <Link key={link} to={`/type${link}`}>
                {name}
              </Link>
            );
          })}
        </div>
        <Link to="/about">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
