import React, { Component } from 'react';
import ProductView from "./ProductView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jsonData from './products.json';



class ProductsView extends Component {

  render() {

    console.log('JSON DATA', jsonData);
    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    console.log('LOAD DATA', loadData);

    let productsList = [];
    for (let i in jsonData['documents']) {
        console.log('PRODUCT', jsonData['documents'][i]);
        productsList.push(jsonData['documents'][i]);
    };

    console.log('PRODUCTS LIST', productsList);

    // shortcut, in prod would recursively walk through JSON to get all products

    let list = productsList.map((item, index) => (
        <Link className="productGridItem" key={'product_' + index} to={
            {
                pathname: "/product/" + item.id,
                state: { product: item.skuDisplayName_en[0]}
            }
        }>
            <img src={item.images[1]} />
            {item.skuDisplayName_en[0]}
        </Link>
    ));

    console.log('LIST', list);

    return (
      <div>
        <h2>PRODUCTS VIEW</h2>
        <ul>
            {list}
        </ul>
      </div>
    );
  }
}

export default ProductsView;