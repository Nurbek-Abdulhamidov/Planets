import styled from "styled-components";

export const WrapperFooter = styled.div`
  border-top: 1px solid #f4f4f4;
  padding: 30px 120px;
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
`;

export const FirstCol = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #1a1a1a;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #5a5a5a;
    padding: 24px 0;
    width: 305px;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  color: #066f14;
  gap: 16px;
  
  i {
    width: 48px;
    height: 48px;
    background: #edffdd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
// export const FirstCol = styled.div``;
// export const FirstCol = styled.div``;
