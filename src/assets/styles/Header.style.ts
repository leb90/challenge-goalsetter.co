import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #17bfdd;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    padding: 16px;
    gap: 58px;
    height: 64px;
  }
`;

export const Logo = styled.img`
  width: 222px;
  height: auto;
`;