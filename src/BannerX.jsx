import React, { Component } from "react";

class Bannerx extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      name: "",
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }

  usernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <label>Userame</label>
        <input
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.usernameChange}
        />
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.nameChange}
        />
      </div>
    );
  }
}
export default Bannerx;
