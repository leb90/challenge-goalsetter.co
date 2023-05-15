import styled, { css } from "styled-components";
import { device } from "../../../utils/media";

interface HeaderContainerProps {
  secondary?: number;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  background: #17bfdd;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.secondary === 1 &&
    css`
      background: #ffffff;
    `}

  @media ${device.tablet} {
    flex-direction: row;
    padding: 16px;
    gap: 58px;
    height: 64px;

  }
`;

export const LogoWrapper = styled.div`
  width: 222px;
  height: auto;
`;
