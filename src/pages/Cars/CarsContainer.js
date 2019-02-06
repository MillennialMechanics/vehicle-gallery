import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Cars from "./Cars";
import config from "../../config";

import "./CarsContainer.scss";

class CarsContainer extends Component {
  render() {
    const type = config.find(
      item => item.link === this.props.location.pathname.split("/type")[1]
    );

    if (!type) {
      return null;
    }

    return (
      <div className="cars-page">
        <h3>{type.name}</h3>
        <Cars cars={type.cars} type={type.link} />
      </div>
    );
  }
}

export default withRouter(CarsContainer);
