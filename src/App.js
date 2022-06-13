import React, { Component, Fragment } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer.js";
import NewItem from "./components/NewItem.js";
import Counter from "./components/Counter.js";

const ITEMURL = "http://localhost:3000/items";

class App extends Component {
  state = {
    items: [],
    count: 0,
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

    let newItem = {};
    newItem.description = event.target.description.value;

    //create item and optimistcly update state
    // let createdItem = this.createNewItemInState(event.target);

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
      .then((res) => {
        newItem.id = res.id;
      })
      .then((res) => {
        this.setState(
          {
            items: [...this.state.items, { ...newItem }],
          }
          //  why was this here in the first place??
          // () => {
          //   console.log("this is not the correct way to fix this problem.");
          // }
        );
      });
    // .then(console.log(this.state.items));
  };

  handleItemEdit = (itemInfo) => {
    //how to do this?
    //remove item from list, and populate it in the new item txt box?
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
          <NewItem onItemSubmit={this.handleItemSubmit} />
          <ItemContainer
            items={this.state.items}
            onItemDelete={this.handleItemDelete}
          />
          <Counter count={this.state.count} />
        </div>
      </Fragment>
    );
  }
}

export default App;
