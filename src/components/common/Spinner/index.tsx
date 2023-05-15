import React from "react";
import { SpinnerContainer, SpinnerDot } from "./Spinner.style";

interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 32 }) => {
  return (
    <SpinnerContainer size={size}>
      <SpinnerDot size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;
  