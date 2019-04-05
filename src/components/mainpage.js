import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Jumbotron from './jumbotron';
import AboutPage from './bodypages/about';
import ContactPage from './bodypages/contact';
import HomePage from './bodypages/home';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class MainPage extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Jumbotron/>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default MainPage;
