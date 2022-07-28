import styled from "styled-components";

export const WrapperNav = styled.div`
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const ListItems = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  ul li {
    margin: 0 48px;
    cursor: pointer;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;

  .loginBtn {
    all: unset;
    padding: 12px 16px;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;
