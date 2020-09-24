import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
export default class CartList extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown  inNavbar>
              <DropdownToggle nav caret>
                Card
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Card Item
                </DropdownItem>
                <DropdownItem>
                Card Item
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
      </div>
    )
  }
}
