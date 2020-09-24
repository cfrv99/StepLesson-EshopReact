import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
export default class App extends Component {
  state = {
    selectedCategory: {},
    products: [],
    cart:[]
  };

  componentDidMount() {
    this.getProducts();
  }
  setSelecetedCategory = (category) => {
    this.setState({ selectedCategory: category });
    this.getProducts(category.id)
  };

  addToCart=(product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(i=>i.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    return (
      <div>
        <Container>
          <Navi cartItemCount={this.state.cart.length}/>
          <Row>
            <Col xs="3">
              <CategoryList
                selectedCategory={this.state.selectedCategory}
                selectCategory={this.setSelecetedCategory}
              />
            </Col>
            <Col xs="9">
              <ProductList
              addToCart={this.addToCart}
                products={this.state.products}
                selectedCategory={this.state.selectedCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
