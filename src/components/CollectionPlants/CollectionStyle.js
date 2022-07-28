import styled from "styled-components";

export const CollectionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;
`;

export const LeftSection = styled.div`
  flex-basis: 40%;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    color: #1a1a1a;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #4a4a4a;
    margin-top: 35px;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }
`;

export const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 24px;
`;

export const Card = styled.div`
  padding: 22px;
  background-color: #f4f4f4;
`;

export const CardLeafImg = styled.img``;
