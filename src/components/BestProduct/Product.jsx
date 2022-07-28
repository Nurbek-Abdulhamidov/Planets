import React, { Component } from "react";
import cardImg from "../../assets/images/card.svg";
import { AiFillStar } from "react-icons/ai";
import {
  CardContainer,
  CardImg,
  CardWrapp,
  ProductWrap,
  StarDiv,
  WrapText,
  WrapTextDiv,
} from "./ProductStyle";

class Product extends Component {
  render() {
    const cardData = [
      {
        id: 1,
        title: "Outdoor Plant",
        img: cardImg,
        price: "$ 50.00",
        star: 4,
      },
      {
        id: 2,
        title: "Monstera Plant",
        img: cardImg,
        price: "$ 50.00",
        star: 3,
      },
      {
        id: 3,
        title: "Pottel Plant",
        img: cardImg,
        price: "$ 50.00",
        star: 5,
      },
      {
        id: 4,
        title: "Indoor Plant",
        img: cardImg,
        price: "$ 50.00",
        star: 4,
      },
    ];
    return (
      <ProductWrap>
        <WrapTextDiv>
          <h3>Our Best Product</h3>
          <WrapText>
            <p>New Plants</p>
            <span>New Arrivals</span>
            <span>Sale</span>
          </WrapText>
        </WrapTextDiv>
        <CardWrapp>
          {cardData.map((item, index) => (
            <CardContainer>
              <CardImg src={item.img} />
              <div className="textWrap">
                <h5>{item.title}</h5>
                <StarDiv>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </StarDiv>
                <span>{item.price}</span>
              </div>
            </CardContainer>
          ))}
        </CardWrapp>
      </ProductWrap>
    );
  }
}

export default Product;
