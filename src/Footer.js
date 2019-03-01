import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Footer extends Component {

  render() {
    return (
    <Navbar bg="light" variant="light" fixed="bottom">
        <Navbar.Brand href="#home">
        <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        {' Fender '}
        </Navbar.Brand>
    </Navbar>
    );
  }
}

export default Footer;