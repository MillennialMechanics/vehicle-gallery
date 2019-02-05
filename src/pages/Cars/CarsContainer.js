import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Categories from "./Categories";
import config from "../../config";

// import "./Categories.scss";

class CategoriesContainer extends Component {
  render() {
    const type = config.find(
      item => item.link === this.props.location.pathname.split("/type")[1]
    );

    if (!type) {
      return null;
    }

    return (
      <div className="">
        <h2>Cars</h2>
        <h3>{type.name}</h3>
        <Categories cars={type.cars} type={type.link} />
      </div>
    );
  }
}

export default withRouter(CategoriesContainer);
