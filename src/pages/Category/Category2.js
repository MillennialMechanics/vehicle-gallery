import React, { Component } from "react";
import PropTypes from "prop-types";

// import "./Category2.scss";

const propTypes = {};

class Category2 extends Component {
  state = {
    isMenuOpened: false,
    currentIndex: null
  };

  handlePointClick = i => {
    if (this.state.isMenuOpened) {
      this.setState({ isMenuOpened: false, currentIndex: null });
    } else {
      this.setState({ isMenuOpened: true, currentIndex: i });
    }
  };
  render() {
    return (
      <div className="">
        {this.props.photos.map((photo, i) => {
          const { src, points } = photo;
          return (
            <div className="images">
              <div className="image-wrapper">
                <img src={src} alt="" />

                {points.map(point => {
                  const { top, left } = point.position;
                  return (
                    <span
                      className="point"
                      style={{ top, left }}
                      onClick={() => this.handlePointClick(i)}
                    />
                  );
                })}
              </div>

              {this.state.isMenuOpened && this.state.currentIndex === i && (
                <div className="menu">
                  <ul>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        link 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        link 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        link 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

Category2.propTypes = propTypes;

export default Category2;
