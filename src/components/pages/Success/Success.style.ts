import styled from "styled-components";
import { device } from "../../../utils/media";
import { motion } from "framer-motion";

interface SuccessProps {
  expanded?: boolean;
}

export const Card = styled(motion.div)<SuccessProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 20px;
  width: 424px;
  height: 328px;
  position: relative;

  background: #ffffff;
  border-radius: 20px;

  @media ${device.tablet} {
    width: 290px;
    height: 344px;
  }
`;


export const TextTitle = styled.h1`
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  color: #1F1F1F;
  margin: 0;
  padding: 10px 10px 20px 0px;
`;

export const TextInfo = styled.p`
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1F1F1F;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 16px;
  width: 100%;
  height: 56px;
  background: #F3A802;
  border-radius: 8px;
  border: none;
  cursor: pointer;

    @media ${device.tablet} {
    bottom: 24px;
    position: relative;
    width: 290px;
  }
`;

export const ButtonText = styled.span`
  color: #FFFFFF;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  `