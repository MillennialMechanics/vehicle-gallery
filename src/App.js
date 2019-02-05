import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          {Routes}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
