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
    const [, , type, name] = this.props.location.pathname.split("/");

    const carType = config.find(item => {
      return item.link === `/${type}`;
    });

    if (!carType) {
      return null;
    }

    const car = carType.cars.find(car => car.link === `/${name}`);

    if (!car) {
      return null;
    }

    const { name: carName, photos } = car;

    return (
      <div className="category">
        <Link to="/">Back</Link>
        <h2>{carName}</h2>
        <Category2 photos={photos} />
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default withRouter(Category);
