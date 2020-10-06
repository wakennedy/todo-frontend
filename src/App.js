import React, { Component, Fragment } from "react";
import "./App.css";
import ItemContainer from "./components/ItemContainer.js";

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
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div>Test </div>
          <ItemContainer items={this.state.items} />
        </div>
      </Fragment>
    );
  }
}

export default App;
