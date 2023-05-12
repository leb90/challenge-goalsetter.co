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
} from "../../assets/styles/Home.style";
import mobile from "../../assets/svg/mobile.svg";

const Home: React.FC = () => {
  return (
    <CenteredContainer>
      <ContainerFrame>
        <Mobile src={mobile} alt="Mobile" />
        <TextContainer>
          <Title>The money app for the whole family</Title>
          <Subtitle>
            Save easily. Spend smartly. Learn money. Earn money.
          </Subtitle>
        </TextContainer>
      </ContainerFrame>
      <ButtonContainer>
        <LoginButton>Log In</LoginButton>
        <SignupButton>Sign Up</SignupButton>
      </ButtonContainer>
    </CenteredContainer>
  );
};

export default Home;
