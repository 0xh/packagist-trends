import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  paper: {
    marginTop: 10
  },
});

class Github extends Component {
  render() {
    if (this.props.githubStatus.length === 0) {
      return null;
    }

    const {classes} = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography variant="title" color="inherit" align="center">
          GitHub Status
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell numeric>Stars</TableCell>
              <TableCell numeric>Watcher</TableCell>
              <TableCell numeric>Forks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.githubStatus.map((n, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{n.name}</TableCell>
                  <TableCell numeric>{n.stars}</TableCell>
                  <TableCell numeric>{n.watchers}</TableCell>
                  <TableCell numeric>{n.forks}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(Github);
