import React, { Component } from 'react';
import ProductView from "./ProductView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import jsonData from './products.json';



class ProductsView extends Component {

  render() {

    console.log('JSON DATA', jsonData);
    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    console.log('LOAD DATA', loadData);
    for (let i in jsonData['documents']) {
        console.log('PRODUCT', jsonData['documents'][i]);
    };

    let dummyData = [{id: 1, name: 'Anne'}, {id: 2, name: 'Moe'}]
    let list = dummyData.map((item, index) => (

    <Link key={'product_' + index} to={
        {
            pathname: "/product/" + item.id,
            state: { product: item.name}
        }
    }>
        {item.name}
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