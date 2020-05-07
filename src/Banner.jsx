import React, { Component } from "react";
import "./index.css";

class Banner extends Component {
  render() {
    const myStyle = {
      color: "green",
      backgroundColor: "black",
      sontSize: 22,
    };

    return (
      <div>
        <h2 className="first-class">This is Banner</h2>
        <p style={myStyle}>This is a paragraph</p>
      </div>
    );
  }
}

export default Banner;
