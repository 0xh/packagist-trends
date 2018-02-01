import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Chart extends Component {
  render() {
    if (this.props.data.length === 0) {
      return null;
    }

    let keys = Object.keys(this.props.data[0]);
    keys = keys.filter(function (v) {
      return v !== 'name';
    });

    const line = keys.map((key) =>
      <Line type="monotone" key={key} dataKey={key} stroke="#8884d8"/>
    );

    return (
      <LineChart width={600} height={300} data={this.props.data}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        {line}
      </LineChart>
    );
  }
}

export default Chart;
