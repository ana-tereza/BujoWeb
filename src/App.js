import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
<Body />
      </div>
    );
  }
}

export default App;
