import React, { Component } from "react";
import { LogInButton } from "./ButtonStyle";

class Button extends Component {
  render() {
    return <LogInButton>{this.props.children}</LogInButton>;
  }
}

export default Button;
