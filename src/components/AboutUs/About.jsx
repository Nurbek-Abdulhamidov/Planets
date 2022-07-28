import React, { Component } from "react";
import Button from "../Button/Button";
import aboutImg from "../../assets/images/Group 289.svg";
import { AboutImg, AboutWrap, LeftSection, RightSection } from "./AboutStyle";

class About extends Component {
  render() {
    return (
      <AboutWrap>
        <LeftSection>
          <AboutImg src={aboutImg} />
        </LeftSection>
        <RightSection>
          <span>About Us</span>
          <h2>Continue to Develop to Became Global Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan
            sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam.
            Lectus elit, nulla elementum fringilla at.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus.
          </p>
          <Button>Read More</Button>
        </RightSection>
      </AboutWrap>
    );
  }
}

export default About;
