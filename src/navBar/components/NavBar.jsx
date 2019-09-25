import React, { Component } from "react";
import { NavItem, Navbar, Nav } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    static get propTypes() {
        return {
            cart: PropTypes.object,
            toggleModal: PropTypes.func,
        }
    }
    render() {
        let cartCount = Object.keys(this.props.cart).length;
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    <img alt="" src="/logo.svg" width="250" height="50" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" activeHref="active">
                        <NavItem>Product Selection</NavItem>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/order" activeHref="active">
                        <NavItem>Your order</NavItem>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/query" activeHref="active">
                        <NavItem>Query orders</NavItem>
                    </Nav.Link>
                </Nav>
                <Nav pullRight>
                    <Nav.Link href="#" className="cart-link" onSelect={this.props.toggleModal}>
                        <i className="fa fa-shopping-cart fa" aria-hidden="true"/>{"   "}Cart:
                        <span className="cart-nav-count">{cartCount}</span>
                    </Nav.Link>
                </Nav>
            </Navbar>

        );
    }
}


export default NavBar;
