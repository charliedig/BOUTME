import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to Coffee</h1>
          <p className="lead">This is a coffee lovers dream</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Jumbotron;
