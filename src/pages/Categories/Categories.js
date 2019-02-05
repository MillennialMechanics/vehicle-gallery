import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Categories.scss";

const propTypes = {
  categories: PropTypes.array.isRequired
};

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map(item => {
        const { image, link, title } = item;
        return (
          <div>
            <h5>{title}</h5>
            <Link to={`/category${link}`} key={title} className="category-item">
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
