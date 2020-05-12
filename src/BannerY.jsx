import React, { Component } from "react";
class Bannery extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }
  render() {
    return (
      <div>{this.state.isLoading ? "Loading....." : "You are welcome"}</div>
    );
  }
}
export default Bannery;
