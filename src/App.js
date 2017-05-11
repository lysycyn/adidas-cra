import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Sidebar from './Sidebar'
import Details from './Details'
import List from './List'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Sidebar />
          <Route exact path="/" component={List} />
          <Route path="/item" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App
