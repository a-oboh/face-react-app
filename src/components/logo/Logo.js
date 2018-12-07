import React, { Component } from "react";
import brain from "./brain.jpg";

class Logo extends Component {
  state = {};
  render() {
    return (
      <div className="ma4 mt0 fl w-10">
        <img src={brain} alt="brain" width="100px" height="100px" />
      </div>
    );
  }
}

export default Logo;
