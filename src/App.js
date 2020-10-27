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
  createNewItemInState = (eventTargetInfo) => {
    //assign event info to new item
    let newItem = {};
    newItem.description = eventTargetInfo.description.value;

    //update state with the newly constructed item
    this.setState({
      items: [...this.state.items, { ...newItem }],
    });

    //return new item for use in fetch
    return newItem;
  };
  handleItemSubmit = (event) => {
    event.preventDefault();

    //create item and optimistcly update state
    let createdItem = this.createNewItemInState(event.target);

    //post item to db
    fetch(ITEMURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        item: createdItem,
      }),
    }).then((res) => res.json());
  };
  handleItemDelete = (itemInfo) => {
    //find and remove from state
    //optimistic rendering!
    let itemsArray = [...this.state.items];
    let index = itemsArray.indexOf(itemInfo);
    itemsArray.splice(index, 1);

    fetch(`${ITEMURL}/${itemInfo.id}`, {
      method: "DELETE",
    }).then(
      this.setState({
        items: itemsArray,
      })
    );
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div>Navbar goes here. </div>
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
