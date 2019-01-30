import React, { Component } from 'react';
import {storeProducts,detailProduct} from "./data"

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state={
    products:storeProducts,
    detailProduct:detailProduct
  }

  handleDetail=()=>{
    console.log("hello from detailhandler")
  }
  addToCard=()=>{
    console.log("hello from addtocard")
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCard:this.addToCard,
      }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
