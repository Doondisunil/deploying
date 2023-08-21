import React, { Component } from "react";
import "./App.css";

export default class About extends Component {
  state = {
    productsList: [],
  };
  componentDidMount() {
    fetch("https://backendjap.onrender.com/products")
      .then((res) => {
        return res.json();
      })
      .then((resjson) => {
        this.setState({
          productsList: resjson,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.productsList.map((product) => (
          <div key={product.image} className="product-item">
            <p>Name:{product.name}</p>
            <p>
              Price:<b>{product.price}</b>
            </p>
            <img src={product.image} width="20%" alt={product.name} />
          </div>
        ))}
      </div>
    );
  }
}
