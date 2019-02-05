import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter, Link } from "react-router-dom";

import Category2 from "./Category2";

import config from "../../config";

// import Loader from "../../components/Loader/Loader";

import "./Category.scss";

const propTypes = {};

class Category extends Component {
  render() {
    const category = config.find(
      item => item.link === this.props.location.pathname.split("/category")[1]
    );

    if (!category) {
      return null;
    }
    return (
      <div className="category">
        <Link to="/">Back</Link>
        <h2>{category.title}</h2>
        <Category2 photos={category.photos} />
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default withRouter(Category);
