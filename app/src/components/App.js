import React, {Component} from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Reboot from 'material-ui/Reboot';

class App extends Component {

  render() {
    return (
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      }}>
        <Reboot />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
