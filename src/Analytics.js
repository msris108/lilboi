import React, { Component } from "react";
import PieCharter from "./PieCharter";
import AreaCharter from "./SimpleAreaChart";

export class Analytics extends Component {
  render() {
    return (
      <div>
        <h1 className="pageheading"> lil 1/0 about me: </h1>
        <center className="analytics">
          <div className="pie">
            <h6> I sing in a lot of jeeners: </h6>
            <PieCharter />
          </div>
          <div className="area">
            <h6>Spotify Views, Trust me I didn't use any bots</h6>
            <AreaCharter />
            2021 Source: Nambu Bro
          </div>
        </center>
      </div>
    );
  }
}

export default Analytics;
