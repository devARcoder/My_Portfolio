import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Hero/>
      </>
    )
  }
}
