import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Chart extends Component {
    render() {
        if (this.props.data === null) {
            return null;
        }

        return (
            <LineChart width={600} height={300} data={this.props.data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="cake" name="cakephp/cakephp" stroke="#8884d8"/>
            </LineChart>
        );
    }
}

export default Chart;
