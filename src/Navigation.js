import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export class Navigation extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar-links">
          <li className="menu-icon">
            <div className="sidebar-item" to="#">
              <span className="sidebar-item-name menu-icon-name">
                Play demo
              </span>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <FontAwesomeIcon
                  className="link-icon play"
                  icon={faPlay}
                  style={{ fontSize: "40px" }}
                />
              </a>
            </div>
          </li>
          <li className="link">
            <Link className="sidebar-item" to="/">
              <FontAwesomeIcon
                className="link-icon home"
                icon={faHome}
                style={{ fontSize: "40px" }}
              />
              <span className="sidebar-item-name">Home</span>
            </Link>
          </li>
          <li className="link">
            <Link className="sidebar-item" to="/stats">
              <FontAwesomeIcon
                className="link-icon stats"
                icon={faInfoCircle}
                style={{ fontSize: "40px" }}
              />
              <span className="sidebar-item-name">Stats</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
