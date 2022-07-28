import React, { Component } from "react";
import cardImg1 from "../../assets/images/cardFollowImg (1).svg";
import cardImg2 from "../../assets/images/cardFollowImg (2).svg";
import cardImg3 from "../../assets/images/cardFollowImg (3).svg";
import cardImg from "../../assets/images/cardFollow.svg";
import { Card, CardsDiv, FollowWrap, Image } from "./FollowStyle";

class Follow extends Component {
  render() {
    const cards = [cardImg2, cardImg, cardImg1, cardImg2, cardImg3];
    return (
      <FollowWrap>
        <h2>Follow Us on Instagram</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accu msan sit amet nunc cursus. Nec tristique at in erat lectus
        </p>
        <CardsDiv>
          {cards.map((item, index) => (
            <Card key={index}>
              <Image src={item} />
            </Card>
          ))}
        </CardsDiv>
      </FollowWrap>
    );
  }
}

export default Follow;
