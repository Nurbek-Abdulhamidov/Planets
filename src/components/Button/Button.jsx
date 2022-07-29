import React, { Component } from "react";
import { LogInButton } from "./ButtonStyle";

class Button extends Component {
  render() {
    return (
      <LogInButton>
        <button class="pushable">
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front"> {this.props.children}</span>
        </button>
      </LogInButton>
    );
  }
}

export default Button;
