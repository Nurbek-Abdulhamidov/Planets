import React, { Component } from "react";
import Button from "../Button/Button";
import leafImg from "../../assets/images/klipartz 7.svg";
import rightImg from "../../assets/images/klipartz 5.svg";
import {
  AboutCustomers,
  FirstCustom,
  HeaderBtnDiv,
  HeaderLeft,
  HeaderRight,
  HeaderWrap,
  LeafImg,
  RightImg,
} from "./HeaderStyle";

class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <HeaderLeft>
          <h1>Growing Beautiful Plants at Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </p>
          <HeaderBtnDiv>
            <Button>Learn More</Button>
            <LeafImg src={leafImg} />
          </HeaderBtnDiv>
          <AboutCustomers>
            <FirstCustom>
              <h2>2000+</h2>
              <span>Delivery</span>
            </FirstCustom>
            <FirstCustom>
              <h2>2000+</h2>
              <span>Delivery</span>
            </FirstCustom>
            <FirstCustom>
              <h2>2000+</h2>
              <span>Delivery</span>
            </FirstCustom>
          </AboutCustomers>
        </HeaderLeft>
        <HeaderRight>
          <RightImg src={rightImg} />
        </HeaderRight>
      </HeaderWrap>
    );
  }
}

export default Header;
