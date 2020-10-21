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

    //post item to db
    fetch(ITEMURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        item: newItem,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: [...this.state.items, { ...data }],
        });
      });
  };
  handleItemDelete = (itemInfo) => {
    let itemsArray = [...this.state.items];
    let index = itemsArray.indexOf(itemInfo);
    itemsArray.splice(index, 1);

    fetch(`${ITEMURL}/${itemInfo.id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    this.setState({
      items: itemsArray,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div>Test </div>
          <ItemContainer
            items={this.state.items}
            onItemDelete={this.handleItemDelete}
          />
          <NewItem onItemSubmit={this.handleItemSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
