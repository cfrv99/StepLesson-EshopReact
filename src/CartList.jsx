import React, { Component } from "react";
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
  NavbarText,
  Badge,
} from "reactstrap";
export default class CartList extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown inNavbar>
          <DropdownToggle nav caret>
            Card
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.carts.length > 0 ? (
              <>
                {this.props.carts.map((cartItem, index) => (
                  <DropdownItem key={index}>
                    {cartItem.product.productName}{" "}
                    <Badge color="warning">{cartItem.quantity}</Badge>
                    {"  "}
                    <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product.id)}><i class="far fa-calendar-times"></i></Badge>

                  </DropdownItem>
                ))} 
              </>
            ):<p>Any item not found</p>}

            <DropdownItem divider />
            <DropdownItem>Get Order</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
