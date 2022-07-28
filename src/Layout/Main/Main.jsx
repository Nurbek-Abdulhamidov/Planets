import React, { Component } from "react";
import About from "../../components/AboutUs/About";
import Product from "../../components/BestProduct/Product";
import Collection from "../../components/CollectionPlants/Collection";
import Follow from "../../components/Follow/Follow";
import Header from "../../components/Header/Header";
import Subscribe from "../../components/Subscribe/Subscribe";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Collection />
        <About />
        <Product />
        <Subscribe />
        <Follow />
      </div>
    );
  }
}

export default Main;
