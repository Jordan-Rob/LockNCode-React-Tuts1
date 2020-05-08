/*
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
*/

import React, { Component } from "react";
import "./index.css";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  handleClick() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={handleClick}>Click to Increase</button>
      </div>
    );
  }
}

export default Banner;
