import styled from "styled-components";
import { device } from "../../../utils/media";
import { motion } from "framer-motion";

export const Mobile = styled.img`
  display: block;
  margin: 0 auto;
`;

export const CenteredContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 593px;
  height: 448px;
  top: 220px;

  @media ${device.tablet}  {
    align-items: center;
    width: 327px;
    min-height: 616px;
    padding: 16px;
    gap: 33.5px;
  }
`;

export const ContainerFrame = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 593px;
  height: 344px;

    @media ${device.tablet} {

    align-items: flex-start;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet}  {
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`;

export const Title = styled.h4`
  font-family: "Avenir";
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
  margin-bottom: 24px;

  @media ${device.tablet}  {
    font-size: 24px;
    line-height: 40px;
    width: 327px;
    height: 80px;
    margin:0;
  }
`;

export const Subtitle = styled.p`
  font-family: "Avenir";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media ${device.tablet}  {
    width: 327px;
    height: 48px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const LoginButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 16px;
  width: 248px;
  height: 56px;
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: transparent;
  color: #ffffff;
  font-family: "Avenir";
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  @media ${device.tablet}  {
    width: 155.5px;
    height: 56px;
  }
`;

export const SignupButton = styled(LoginButton)`
  background-color: #ffffff;
  color: #500f71;
`;
