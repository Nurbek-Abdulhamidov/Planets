import styled from "styled-components";

export const ProductWrap = styled.div`
  margin: 100px 0;
`;

export const WrapTextDiv = styled.div`
  text-align: center;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #1a1a1a;
  }
`;

export const WrapText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 25px 0;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #066f14;
    cursor: pointer;
  }

  span {
    font-style: normal;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #4a4a4a;
  }
`;

export const CardContainer = styled.div`
  background: #eaf2e5;
  margin: 0 24px;
  .textWrap {
    padding: 5px 32px 30px 32px;
  }

  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #1a1a1a;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #1a1a1a;
  }
`;

export const CardWrapp = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`;

export const CardImg = styled.img`
  padding: 10px 65px 5px 65px;
`;

export const StarDiv = styled.div`
  display: flex;
  gap: 5px;
  color: rgba(244, 195, 0, 1);
  margin: 10px 0;
`;
