import React, { Component } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Templete from "./rutas";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div>
        <Templete />
      </div>
    );
  }
}

export default App;
