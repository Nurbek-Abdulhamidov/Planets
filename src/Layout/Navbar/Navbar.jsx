import React, { Component } from "react";
import Button from "../../components/Button/Button.jsx";
import { WrapperNav, Logo, ListItems, ButtonDiv } from "./NavbarStyle";

class Navbar extends Component {
  render() {
    return (
      <WrapperNav>
        <Logo>Plant</Logo>
        <ListItems>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </ListItems>
        <ButtonDiv>
          <button className="loginBtn">Log In</button>
          <Button>
          Sign In
          </Button>
        </ButtonDiv>
      </WrapperNav>
    );
  }
}

export default Navbar;
