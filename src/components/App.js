import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import CssBaseline from 'material-ui/CssBaseline';
import { Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className="App">
    <CssBaseline />
    <Header />
    <Route path="/" component={Main} />
    <Footer />
  </div>
);

export default App;
