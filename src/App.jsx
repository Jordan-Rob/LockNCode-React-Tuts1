/*import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>The end for today</h1>
      </div>
    );
  }
}
export default App;*/

import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";

/*
class App extends Component {
  render() {
    return (
      <div>
        <h1>Just startin out with React</h1>
        <Navbar />
        <Banner />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
*/

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}
export default App;
