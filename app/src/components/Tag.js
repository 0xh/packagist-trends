import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

class Tag extends Component {
  handleDelete = word => () => {
    this.props.handleDelete(word);
  };

  render() {
    return (
      this.props.words.map((word, key) => {
        return (
          <Chip
            key={key}
            label={word}
            onDelete={this.handleDelete(word)}
          />
        );
      })
    )
  }
}

export default Tag;
