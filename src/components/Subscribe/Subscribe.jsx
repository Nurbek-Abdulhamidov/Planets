import React, { Component } from "react";
import Button from "../Button/Button";
import PlanetImg from "../../assets/images/klipartz 14.svg";
import {
  Image,
  ImageWrapDiv,
  Input,
  InputDiv,
  LeftSection,
  RightSection,
  SubscribeWrap,
} from "./SubscribeStyle";

class Subscribe extends Component {
  render() {
    return (
      <SubscribeWrap>
        <LeftSection>
          <h2>Subscribe Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
            tempor, accumsan sit amet nunc cursus.{" "}
          </p>
          <InputDiv>
            <Input placeholder="Enter mail..." type="text" />
            <div className="Btn">
              <Button>Subscribe</Button>
            </div>
          </InputDiv>
        </LeftSection>
        <RightSection>
          <ImageWrapDiv>
            <Image src={PlanetImg} />
          </ImageWrapDiv>
        </RightSection>
      </SubscribeWrap>
    );
  }
}

export default Subscribe;
