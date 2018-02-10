import React, {Component} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    height: 400,
  },
});

class Chart extends Component {
  color = [
    '#9C27B0',
    '#2196F3',
    '#F44336',
    '#CDDC39',
    '#FF9800',
    '#3F51B5',
    '#4CAF50',
  ];

  render() {
    if (this.props.data.length === 0) {
      return null;
    }

    let keys = Object.keys(this.props.data[0]);
    keys = keys.filter(function (v) {
      return v !== 'name';
    });

    const line = keys.map((key, i) =>
      <Line type="monotone"
            key={key}
            dataKey={key}
            stroke={this.color[i]}
            strokeWidth={2}
            dot={false}/>
    );
    const {classes} = this.props;

    return (
      <Paper className={classes.root}>
        <Typography variant="title" color="inherit" align="center">
          Package Downloads
        </Typography>
        <ResponsiveContainer>
          <LineChart height={400} data={this.props.data}
                     margin={{top: 10, right: 100, left: 30, bottom: 30}}>
            <XAxis dataKey="name" angle={-5}/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            {line}
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    );
  }
}

export default withStyles(styles)(Chart);
