import React, { Component, Fragment } from "react";
import Item from "./Item.js";

export default class ItemContainer extends Component {
  renderItems = () => {
    const { items } = this.props;
    return items.map((item) => (
      <Item info={item} key={item.id} onItemDelete={this.props.onItemDelete} />
    ));
  };
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <table>
            <tbody>{this.renderItems()}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
