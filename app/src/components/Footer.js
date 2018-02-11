import React, {Component} from 'react';
import Typography from 'material-ui/Typography';

class Footer extends Component {
  render() {
    return (
      <footer style={{
        height: 40,
        borderTop: 'solid 1px #BDBDBD',
      }}>
        <Typography align="center">
          Made by <a href='https://github.com/mosaxiv'>mosaxiv</a>
        </Typography>
      </footer>
    )
  }
}

export default Footer;
