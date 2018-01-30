import React, {Component} from 'react';
import {Input} from 'reactstrap';

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
        <Input
          type="text"
          id="search"
          placeholder="Please enter a packages..."
          value={this.state.value}
          onChange={this.handleChange}
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
  }
}

export default Search;
