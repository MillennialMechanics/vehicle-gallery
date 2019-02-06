import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Cars.scss";

const propTypes = {
  type: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired
};

const Cars = ({ cars, type }) => {
  return (
    <div className="cars">
      {cars.map(item => {
        const { image, link, name } = item;
        return (
          <div key={name} className="cars-item">
            <h5>{name}</h5>
            <Link to={`/car${type}${link}`} className="category-item">
              <img src={image} alt={name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

Cars.propTypes = propTypes;

export default Cars;
