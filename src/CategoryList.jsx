import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories: [],
    error:''
  };

  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    const url = "http://localhost:3000/categories";
    fetch(url)
      .then((response) => {
        if(response.statusCode===404){
          return (
            this.setState({error:"Data Not Found"})
          )
        }else{
          return(
            response.json()
          )
        }
      })
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h2>CategoryList</h2>
        <ListGroup>
          {this.state.categories.map((category, index) => (
            <ListGroupItem onClick={()=>this.props.selectCategory(category)} key={index}>{category.categoryName}</ListGroupItem>
          ))}

        </ListGroup>
          <h1>{this.props.selectedCategory.categoryName}</h1>
      </div>
    );
  }
}
