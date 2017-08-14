import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CollegeSearch from './components/CollegeSearch'
import ResourceMapView from './components/ResourceMapView'
var models = require('./models');
var User = models.User;

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default App;
