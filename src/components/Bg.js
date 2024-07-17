import "./BgStyle.css";

import React, { Component } from "react";

class Bg extends Component {
  render() {
    return (
      <div className="Bg-Img">
        <div className="cn">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Bg;
