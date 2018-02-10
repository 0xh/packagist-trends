import React, {Component} from 'react';
import Main from './Main';
import Header from './Header';
import Reboot from 'material-ui/Reboot';

class App extends Component {

  render() {
    return (
      <div>
        <Reboot />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
