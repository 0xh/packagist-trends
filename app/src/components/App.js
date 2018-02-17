import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Reboot from 'material-ui/Reboot';
import { Route } from 'react-router-dom';

const style = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
};

const App = () => (
  <div style={style}>
    <Reboot />
    <Header />
    <Route path="/" component={Main} />
    <Footer />
  </div>
);

export default App;
