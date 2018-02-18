import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Typography align="center">
          Made by <a href="https://github.com/mosaxiv">mosaxiv</a>.
          Thanks for <a href="https://packagist.org/">Packagist</a>.
        </Typography>
      </footer>
    );
  }
}

export default Footer;
