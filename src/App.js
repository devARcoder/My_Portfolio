import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Hero/>
      <Story/>
      </>
    )
  }
}
