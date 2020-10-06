import React, { Component, Fragment } from "react";

export default class Item extends Component {
  render() {
    const { info } = this.props;
    return (
      <Fragment>
        <tr>
          <td>{info.name}</td>
          <td>{info.description}</td>
          <td>{info.category}</td>
        </tr>
      </Fragment>
    );
  }
}
