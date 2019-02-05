import React, { Component } from "react";

import Categories from "../Categories";
import config from "../../../config";

// import "./Categories.scss";

class CategoriesContainer extends Component {
  render() {
    return (
      <div className="">
        <h2>Categories</h2>
        <Categories categories={config} />
      </div>
    );
  }
}

export default CategoriesContainer;
