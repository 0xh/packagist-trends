import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './App.css';

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            <a href="/" className="TitleLink">
              Packagist trends
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
