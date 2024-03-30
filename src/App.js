import React, { Component } from 'react'
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './component/nav/Nav';
import Home from './component/nav/HOME/Home';
import Footer from './component/nav/FOOTER/Footer';
export default class App extends Component {
  render() {
    return (
     <>
      <Nav />

      <Home />
      
      <Footer />
     </>
    )
  }
}
