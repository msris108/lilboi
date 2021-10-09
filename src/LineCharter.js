import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: ' A',
    Energy: 4000,
    Acousticness: 2400,
    amt: 2400,
  },
  {
    name: ' B',
    Energy: 3000,
    Acousticness: 1398,
    amt: 2210,
  },
  {
    name: ' C',
    Energy: 2000,
    Acousticness: 9800,
    amt: 2290,
  },
  {
    name: ' D',
    Energy: 2780,
    Acousticness: 3908,
    amt: 2000,
  },
  {
    name: ' E',
    Energy: 1890,
    Acousticness: 4800,
    amt: 2181,
  },
  {
    name: ' F',
    Energy: 2390,
    Acousticness: 3800,
    amt: 2500,
  },
  {
    name: ' G',
    Energy: 3490,
    Acousticness: 4300,
    amt: 2100,
  },
];

export default class LineCharter extends PureComponent {

  render() {
    return (
        <LineChart
          width={800}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid opacity="0.2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Acousticness" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Energy" stroke="#82ca9d" />
        </LineChart>
    );
  }
}
