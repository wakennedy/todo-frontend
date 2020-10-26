import React, { Component, Fragment } from "react";

export default class NewItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="newItemForm">
          <div className="task-form">
            <form onSubmit={(event) => this.props.onItemSubmit(event)}>
              <input type="text" name="description" />
              {/* <br></br> */}
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
