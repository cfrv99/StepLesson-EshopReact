import React, { Component } from "react";
import { Table,Button } from "reactstrap";
export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <p>{this.props.selectedCategory.categoryName}</p>
        <Table>
          <thead>
            <tr>
              <th>ProductsName</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>
                  <Button onClick={()=>this.props.addToCart(product)} color="success">Add</Button>{"  "}
                  <Button color="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
