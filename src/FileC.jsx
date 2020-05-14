import React, { Component } from "react";
import { Consumer } from "./Context";

class Filec extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(greeting) => {
            return <div>My greeting is {greeting}</div>;
          }}
        </Consumer>
      </div>
    );
  }
}

export default Filec;
