import React, { Component, Fragment } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer.js";
import NewItem from "./components/NewItem.js";

const ITEMURL = "http://localhost:3000/items";

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch(ITEMURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }
  handleItemSubmit = (event) => {
    event.preventDefault();

    //create new item
    let newItem = {};
    newItem.name = event.target.name.value;
    newItem.description = event.target.description.value;
    newItem.category = event.target.category.value;

    console.log(newItem);
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div>Test </div>
          <ItemContainer items={this.state.items} />
          <NewItem onItemSubmit={this.handleItemSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
