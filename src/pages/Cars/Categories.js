import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Categories.scss";

const propTypes = {
  // type:
  cars: PropTypes.array.isRequired
};

const Categories = ({ cars, type }) => {
  return (
    <div className="categories">
      {cars.map(item => {
        const { image, link, title } = item;
        return (
          <div>
            <h5>{title}</h5>
            <Link
              to={`/car${type}${link}`}
              key={title}
              className="category-item"
            >
              <img src={image} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

Categories.propTypes = propTypes;

export default Categories;
