import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {

  render() {
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' Fender Digital Frontend Challenge'}
            </Navbar.Brand>
        </Navbar>
    );
  }
}

export default Header;