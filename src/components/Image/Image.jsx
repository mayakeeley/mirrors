import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <img
        src={this.props.photo}
        alt={this.props.name}
        style={{ filter: `invert(${this.props.percentage}%)`, height: "200px" }}
        key={this.props.percentage}
      />
    );
  }
}

export default Image;
