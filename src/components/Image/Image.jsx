import React, { Component } from "react";
import styles from "./Image.module.css";

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
      <div className={styles.mirror}>
        <img
          src={this.props.photo}
          alt={this.props.name}
          style={{
            filter: `invert(${this.state.currentInvert}%)`,
            height: "150px",
            transition: "1s filter"
          }}
          onClick={this.switchInvert}
        />
      </div>
    );
  }
}

export default Image;
