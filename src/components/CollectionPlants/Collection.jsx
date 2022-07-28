import React, { Component } from "react";
import LeafImg from "../../assets/images/cardImg.svg";
import { BsArrowRight } from "react-icons/bs";
import {
  Card,
  CardLeafImg,
  CollectionDiv,
  LeftSection,
  RightSection,
} from "./CollectionStyle";

class Collection extends Component {
  render() {
    return (
      <CollectionDiv>
        <LeftSection>
          <h3>We have lots of plants collection for you and your family</h3>
          <p>
            See all collection <BsArrowRight />
          </p>
        </LeftSection>
        <RightSection>
          <Card>
            <CardLeafImg src={LeafImg} />
          </Card>
          <Card>
            <CardLeafImg src={LeafImg} />
          </Card>
          <Card>
            <CardLeafImg src={LeafImg} />
          </Card>
        </RightSection>
      </CollectionDiv>
    );
  }
}

export default Collection;
