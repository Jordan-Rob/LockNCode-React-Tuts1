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
import Banner2 from "./Banner2";
import Bannerx from "./BannerX";
import Bannery from "./BannerY";
import File from "./FileA";
import { Providor } from "./Context";

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

/*class App extends Component {
  render() {
    return (
      <div>
        <Banner2 />
      </div>
    );
  }
}
export default App;*/

class App extends Component {
  render() {
    return (
      <div>
        <Providor value="Hello Everyone">
          <File />
        </Providor>
      </div>
    );
  }
}
export default App;
