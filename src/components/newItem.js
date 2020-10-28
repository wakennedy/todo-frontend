import React, { Component, Fragment } from "react";

export default class NewItem extends Component {
  state = {
    item: "",
  };
  onHandleChange = (event) => {
    //update form as you type
    this.setState({
      item: event.target.value,
    });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    //send item off for post
    this.props.onItemSubmit(event);
    //reset for upon item Submit
    this.setState({
      item: "",
    });
  };
  render() {
    return (
      <Fragment>
        <div className="newItemWrapper">
          <h1>Task Manager</h1>
          <form onSubmit={this.onHandleSubmit}>
            <input
              type="text"
              id="descriptionInput"
              name="description"
              value={this.state.item}
              onChange={this.onHandleChange}
            />
            <br />
            <input
              type="submit"
              name="submit"
              value="Create"
              className="submit"
            />
          </form>
        </div>
      </Fragment>
    );
  }
}
