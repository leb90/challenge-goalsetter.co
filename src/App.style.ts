import styled, { css } from "styled-components";
import backgroundImage from "./assets/images/background.png";

interface AppContainerProps {
  secondary: number;
}

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentContainer = styled.main<AppContainerProps>`
  position: relative;
  background: #500f71;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        270deg,
        rgba(126, 72, 195, 1) 0%,
        #6aa3da 100%
      );
      background-size: cover;
      &:before {
        content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-position: 50% 0;
        background-size: cover;
      }
    `}
`;
