import React, { Component } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  paper: {
    marginTop: 10,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class Github extends Component {
  render() {
    if (this.props.githubStatus.length === 0) {
      return null;
    }

    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography variant="title" color="inherit" align="center">
          GitHub
        </Typography>
        <div className={classes.tableWrapper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell numeric>Stars</TableCell>
                <TableCell numeric>Watcher</TableCell>
                <TableCell numeric>Forks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.githubStatus.map((n, i) => {
                if (n.url.includes('https://github.com')) {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <a href={n.url} target="_blank" rel="noopener">
                          {n.name}
                        </a>
                      </TableCell>
                      <TableCell numeric>{n.stars}</TableCell>
                      <TableCell numeric>{n.watchers}</TableCell>
                      <TableCell numeric>{n.forks}</TableCell>
                    </TableRow>
                  );
                } else {
                  return (
                    <TableRow key={i}>
                      <TableCell>{n.name}</TableCell>
                      <TableCell numeric>-</TableCell>
                      <TableCell numeric>-</TableCell>
                      <TableCell numeric>-</TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Github);
