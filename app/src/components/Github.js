import React, {Component} from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

class Github extends Component {
  render() {
    if(this.props.githubStatus.length === 0){
      return null;
    }

    return (
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
    )
  }
}

export default Github;
