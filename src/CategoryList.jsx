import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories: [],
    error: "",
  };

  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    const url = "http://localhost:3000/categories";
    fetch(url)
      .then((response) => {
        if (response.statusCode === 404) {
          return this.setState({ error: "Data Not Found" });
        } else {
          return response.json();
        }
      })
      .then((data) => this.setState({ categories: data }));
  };

  activeClass = (categoryId) => {
    if (this.props.selectedCategory.id === categoryId) return "active";
    else {
      return null;
    }
  };
  render() {
    return (
      <div>
        <ListGroup>
          {this.state.categories.map((category, index) => (
            <ListGroupItem
              className={this.activeClass(category.id)}
              onClick={() => this.props.selectCategory(category)}
              key={index}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
