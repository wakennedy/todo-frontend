import React, { Component, Fragment } from "react";
import Item from "./Item.js";

export default class ItemContainer extends Component {
  renderItems = () => {
    const { items } = this.props;
    return items.map((item, index) => (
      <Item info={item} key={index} onItemDelete={this.props.onItemDelete} />
    ));
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderItems()}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
