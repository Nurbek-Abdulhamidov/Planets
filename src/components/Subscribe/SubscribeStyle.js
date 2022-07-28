import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform:translateY(0px) ;
  }
  50% {
    transform:translateY(40px) ;
  }
  50% {
    transform:translateY(40px) ;
  }0% {
    
    transform:translateY(0px) ;
  }
  
`;

export const SubscribeWrap = styled.div`
  padding: 60px 90px;
  background-color: rgba(223, 255, 227, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const LeftSection = styled.div`
  flex-basis: 50%;

  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #1a1a1a;
  }

  p {
    margin: 12px 0 30px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #4a4a4a;
  }
`;

export const RightSection = styled.div`
  flex-basis: 50%;
`;

export const InputDiv = styled.div`
  position: relative;
  .Btn {
    position: absolute;
    top: 6px;
    right: 90px;
  }
`;

export const ImageWrapDiv = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 455px;
  height: 60px;
  background: #ffffff;
  border-radius: 4px;
  padding: 8px 8px 8px 20px;
  outline: none;
  border: none;
`;

export const Image = styled.img`
  position: absolute;
  top: -200px;
  right: 0;
  padding-right: 40px;
`;
