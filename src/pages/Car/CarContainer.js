import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import Car from "./Car";

import config from "../../config";

import "./CarContainer.scss";

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
      <div className="car-page">
        <h2>{carName}</h2>
        <Car photos={photos} />
        <Link to="/" className="btn">
          Back
        </Link>
      </div>
    );
  }
}

export default withRouter(Category);
