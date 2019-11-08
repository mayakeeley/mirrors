import React, { Component } from "react";
import Image from "../../components/Image";

class Images extends Component {
  state = {};

  render() {
    let images = 9;
    let invertPercentages = [];

    for (let i = 0; i < images; i++) {
      invertPercentages.push(Math.round(Math.random() * 100));
    }
    return (
      <>
        {invertPercentages.map(percentage => {
          return (
            <Image
              percentage={percentage}
              name={this.props.name}
              photo={this.props.photo}
              key={percentage}
            />
          );
        })}
      </>
    );
  }
}

export default Images;
