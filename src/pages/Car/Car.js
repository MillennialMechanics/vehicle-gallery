import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import Links from "./Links/Links";

import "./Car.scss";

class Car extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired
  };

  state = {
    isMenuOpened: false,
    indexes: null
  };

  handlePointClick = (i, i2) => {
    if (this.state.isMenuOpened) {
      const [index1, index2] = this.state.indexes;

      if (index1 === i && index2 === i2) {
        this.setState({ isMenuOpened: false, indexes: null });
        return;
      }
    }

    this.setState({ isMenuOpened: true, indexes: [i, i2] });
  };

  render() {
    const settings = {
      speed: 0,
      dots: false
    };

    return (
      <div className="car">
        <Slider {...settings}>
          {this.props.photos.map((photo, i) => {
            const { src, points } = photo;
            return (
              <div className="images">
                <div className="image-wrapper" key={i}>
                  <img src={src} alt="Car" />

                  {points.map((point, i2) => {
                    const { top, left } = point.position;
                    return (
                      <span
                        className="point"
                        key={i2}
                        style={{ top, left }}
                        onClick={() => this.handlePointClick(i, i2)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Slider>
        {this.state.isMenuOpened && (
          <Links
            links={
              this.props.photos[this.state.indexes[0]].points[
                this.state.indexes[1]
              ].links
            }
          />
        )}
      </div>
    );
  }
}

export default Car;
