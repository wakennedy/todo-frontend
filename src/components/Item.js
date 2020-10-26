import React, { Component, Fragment } from "react";

export default class Item extends Component {
  handleOnItemDelete = () => {
    this.props.onItemDelete(this.props.info);
  };
  render() {
    const { info } = this.props;
    return (
      <Fragment>
        <tr>
          <td>{info.description}</td>
          <td>
            <button
              type="button"
              className="delete-btn"
              onClick={this.handleOnItemDelete}
            >
              Delete
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
