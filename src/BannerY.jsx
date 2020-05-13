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

/*
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
*/

//fetch API

import React, { Component } from "react";
class Banner extends Component {
  constructor() {
    super();
    this.state = {
      fetchedData: {},
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          fetchedData: data,
        });
      });
  }
  render() {
    return <div>{this.state.fetchedData.title}</div>;
  }
}
export default Banner;
