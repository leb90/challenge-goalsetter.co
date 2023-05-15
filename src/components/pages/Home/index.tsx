import React from "react";
import {
  Mobile,
  CenteredContainer,
  TextContainer,
  Title,
  Subtitle,
  ButtonContainer,
  LoginButton,
  SignupButton,
  ContainerFrame,
} from "./Home.style";
import { Link } from "react-router-dom";
import mobile from "../../../assets/images/mobile.png";

const Home: React.FC = () => {
  return (
    <CenteredContainer>
      <ContainerFrame
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Mobile src={mobile} alt="Mobile" />
        <TextContainer>
          <Title>The money app for the whole family</Title>
          <Subtitle>
            Save easily. Spend smartly. Learn money. Earn money.
          </Subtitle>
        </TextContainer>
      </ContainerFrame>
      <ButtonContainer>
        <Link to="/login">
          <LoginButton>Log In</LoginButton>
        </Link>
        <SignupButton>Sign Up</SignupButton>
      </ButtonContainer>
    </CenteredContainer>
  );
};

export default Home;
