import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CategoriesPage from "./pages/Categories/C/C";
import CategoryPage from "./pages/Category/Category";

// categories

export default (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={CategoriesPage} />
        <Route path="/category/*" component={CategoryPage} />
      </Switch>
    </div>
  </Router>
);
