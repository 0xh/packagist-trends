import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  chip: {
    margin: 5,
  },
});

class Tag extends Component {
  handleDelete = word => () => {
    this.props.handleDelete(word);
  };

  render() {
    const {classes} = this.props;

    return (
      this.props.words.map((word, key) => {
        return (
          <Chip
            key={key}
            label={word}
            onDelete={this.handleDelete(word)}
            className={classes.chip}
          />
        );
      })
    )
  }
}

export default withStyles(styles)(Tag);
