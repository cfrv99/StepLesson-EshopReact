import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import CartList from './CartList';
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><i class="fas fa-shopping-cart"></i> Step Shop</NavbarBrand>
        <NavbarToggler onClick={true} />
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            
          </Nav>
          <CartList removeFromCart={this.props.removeFromCart} carts={this.props.carts}/>
          <Badge color="success">{this.props.cartItemCount}</Badge>
        </Collapse>
      </Navbar>
      </div>
    )
  }
}
