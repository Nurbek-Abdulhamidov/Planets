import styled from "styled-components";

export const AboutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSection = styled.div`
  flex-basis: 50%;
`;
export const RightSection = styled.div`
  flex-basis: 50%;

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #066f14;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #1a1a1a;
    padding: 12px 0 24px 0;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #4a4a4a;
  }

  .paragraph {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #4a4a4a;
    margin: 16px 0 52px 0;
  }
`;

export const AboutImg = styled.img``;
