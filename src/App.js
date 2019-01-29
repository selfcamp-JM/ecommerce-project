import React, { Component,Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Naavbar"

class App extends Component {
  render() {
    return (
          <Fragment>
            <Navbar/>
            <h3>Hello from app</h3>
          </Fragment>
    )
  }
}

export default App;
