import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Reboot from 'material-ui/Reboot';
import { Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <Reboot />
    <Header />
    <Route path="/" component={Main} />
    <Footer />
  </div>
);

export default App;
