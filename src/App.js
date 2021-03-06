import React, { Component } from "react";
import Routes from "./Routes";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">{Routes}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
