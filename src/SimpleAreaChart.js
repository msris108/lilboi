import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: " Jan",
    views: 40000,
    pv: 2400,
    amt: 2400
  },
  {
    name: " Feb",
    views: 30000,
    pv: 1398,
    amt: 2210
  },
  {
    name: " Mar",
    views: 20000,
    pv: 9800,
    amt: 2290
  },
  {
    name: " Apr",
    views: 27800,
    pv: 3908,
    amt: 2000
  },
  {
    name: " May",
    views: 18900,
    pv: 4800,
    amt: 2181
  },
  {
    name: " Jun",
    views: 23900,
    pv: 3800,
    amt: 2500
  },
  {
    name: " Jul",
    views: 34900,
    pv: 4300,
    amt: 2100
  }
];

export default class AreaCharter extends PureComponent {
  render() {
    return (
      <AreaChart
        width={700}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid opacity="0.2" />
        <Tooltip />
        <Area type="monotone" dataKey="views" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}
