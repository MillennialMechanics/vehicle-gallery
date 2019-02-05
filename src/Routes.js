import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home/Home";
import CarsPage from "./pages/Cars/CarsContainer";
import CarPage from "./pages/Car/CarContainer";
import AboutPage from "./pages/About/About";
import ContactUsPage from "./pages/ContactUs/ContactUs";

export default (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/type/*" component={CarsPage} />
    <Route path="/car/*" component={CarPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact-us" component={ContactUsPage} />
  </Switch>
);
