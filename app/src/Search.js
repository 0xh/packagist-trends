import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="search"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Please enter a packages..."
          fullWidth
          margin="normal"
        />
      </form>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value === '') {
      return;
    }

    this.props.handleSubmit(this.state.value);
    this.setState({value: ''});
  }
}

export default Search;
