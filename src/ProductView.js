import React, { Component } from 'react';

class ProductView extends Component {


  render() {
    console.log('PROPS', this.props);
    console.log('HELLO FROM PROD');
    const {id} = this.props.match.params;
    console.log('ID', id);

    console.log('STATE', this.props.location.state);
    let prodInfo = this.props.location.state.product;


    return (
      <div>
        <h2>PRODUCT view</h2>
        <div>{prodInfo}</div>
      </div>
    );
  }
}

export default ProductView;