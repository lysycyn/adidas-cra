import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header/index'
import Details from './Details/index'
import List from './List/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/item" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App
