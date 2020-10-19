import React, { Component, Fragment } from "react";

export default class NewItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="newItemForm">
          <div className="task-form">
            <form onSubmit={(event) => this.props.onItemSubmit(event)}>
              <h1>Create a New Task</h1>
              <p>Name:</p>
              <input type="text" name="name" />
              <p>Description:</p>
              <input type="text" name="description" />
              <p>Category:</p>
              <input type="text" name="category" />
              <br></br>
              <input
                type="submit"
                name="submit"
                value="Create"
                className="submit"
              />
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
