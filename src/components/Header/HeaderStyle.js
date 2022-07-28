import styled from "styled-components";

export const HeaderWrap = styled.div`
  margin: 35px 0;
  display: flex;
  gap: 117px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  flex-basis: 50%;

  h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 72px;
    line-height: 92px;
    color: #1a1a1a;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #4a4a4a;
    margin: 24px 0 30px 0;
  }
`;

export const HeaderRight = styled.div`
  flex-basis: 50%;
`;

export const HeaderBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeafImg = styled.img`
  width: 157px;
`;

export const AboutCustomers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  margin-top: 50px;
`;

export const FirstCustom = styled.div`
  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    color: #001b04;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #1a1a1a;
    padding-left:10px ;
  }
`;

export const RightImg = styled.img``;
