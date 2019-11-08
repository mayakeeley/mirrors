import React, { Component } from "react";

class Image extends Component {
  state = {
    assignedInvert: this.props.percentage,
    currentInvert: this.props.percentage
  };

  switchInvert = () => {
    this.state.currentInvert === this.state.assignedInvert
      ? this.setState({ currentInvert: 0 })
      : this.setState({ currentInvert: this.state.assignedInvert });
  };

  render() {
    return (
      <img
        src={this.props.photo}
        alt={this.props.name}
        style={{
          filter: `invert(${this.state.currentInvert}%)`,
          height: "200px",
          transition: "1s filter"
        }}
        onClick={this.switchInvert}
      />
    );
  }
}

export default Image;
