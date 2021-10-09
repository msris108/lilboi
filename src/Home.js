import React, { Component } from "react";
import ProPic from "../sundu.jpeg";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className="name">lil Boi</h1>

        <img
          className="intro-picture"
          src={ProPic}
          alt="ProfilePicture"
          height="250px"
          width="250px"
          style={{ borderRadius: "50%" }}
        />
        <h3>Behold the greatest text-to-speech rap bot of all time.</h3>
        <h4>Most popular in SSN College of Engineering, CSE department.</h4>
      </div>
    );
  }
}

export default HomePage;
