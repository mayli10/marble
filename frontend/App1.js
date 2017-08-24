import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CollegeSearch from './components/CollegeSearch'
import Home from './components/Home'
const User = models.User;

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default App;
