import React, { Component } from "react";
import Image from "../../components/Image";
import styles from "./Images.module.css";

class Images extends Component {
  state = {};

  render() {
    let images = 5;
    let invertPercentages = [];

    for (let i = 0; i < images; i++) {
      invertPercentages.push(Math.round(Math.random() * 100));
    }
    return (
      <div className={styles.images}>
        {invertPercentages.map((percentage, index) => {
          return (
            <Image
              percentage={percentage}
              name={this.props.name}
              photo={this.props.photo}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Images;
