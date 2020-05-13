//lifecycle methods
/*import React, { Component } from "react";
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
export default Bannery;*/

//refs

import React, { Component } from "react";
class Bannery extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <form>
          <label>Username</label>
          <input type="text" ref={this.inputRef} />
          <br></br>
          <label>Password</label>
          <input type="password" />
        </form>
      </div>
    );
  }
}
export default Bannery;
