import styled, { keyframes } from "styled-components";

interface SpinnerContainerProps {
  size: number;
}

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const SpinnerDot = styled.div<SpinnerContainerProps>`
  width: ${(props) => props.size / 4}px;
  height: ${(props) => props.size / 4}px;
  border-radius: 50%;
  background-color: #000;
  animation: ${spinAnimation} 1s infinite linear;
  transform-origin: ${(props) => props.size / 2}px ${(props) => props.size / 2}px;
`;
