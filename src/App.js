import React, { Component,Fragment } from 'react';
import {Switch,Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Naavbar"
import Details from "./Components/Details"
import Cart from "./Components/Cart"
import ProductList from "./Components/ProductList"
import Default from "./Components/Default"
import Modal from "./Components/Modal"




class App extends Component {
  render() {
    return (
          <Fragment>
              <Navbar/>
              <Switch>
                <Route exact path ="/" component={ProductList} />
                <Route path ="/details" component={Details} />
                <Route path ="/cart" component={Cart} />
                <Route component={Default} />
              </Switch>
              <Modal />
          </Fragment>
    )
  }
}

export default App;
