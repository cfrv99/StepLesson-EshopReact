import React, { Component } from "react";
import { Table, Button, Spinner } from "reactstrap";
export default class ProductList extends Component {
  getTable = () => {
    const { loader, products } = this.props;
    if (loader)
      return <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />;
    else {
      return (
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
                    <Button
                      onClick={() => this.props.addToCart(product)}
                      color="success"
                    ><i class="fas fa-cart-arrow-down"></i>
                    </Button>
                    {"  "}
                    <Button color="danger"><i class="fas fa-trash"></i></Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    }
  };

  render() {
    const { products } = this.props;
    return (
      <div>

        {this.getTable()}
      </div>
    );
  }
}
