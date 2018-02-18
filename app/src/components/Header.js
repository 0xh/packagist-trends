import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './App.css';
import logo from '../logo.png';

class Header extends Component {
  render() {
    let logos = [];
    for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
      logos.push(<img src={logo} key={i} className="App-logo" alt="logo" />);
    }

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            <a href="/" className="Title-link">
              Packagist trends
            </a>
          </Typography>
          {logos}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
