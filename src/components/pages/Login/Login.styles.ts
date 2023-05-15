import styled from "styled-components";
import { device } from "../../../utils/media";

interface LoginProps {
  disabled?: boolean;
  expanded?: number;
}

export const Card = styled.div<LoginProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 40px;
  width: 424px;
  height: ${({ expanded }) => (expanded ? "504px" : "416px")};
  position: relative;

  background: #ffffff;
  border-radius: 20px;
  z-index: 2;

  &::before {
    z-index: -1;
  }

  @media ${device.tablet} {
    width: 290px;
    height: ${({ expanded }) => (expanded ? "450px" : "344px")};
  }
`;

export const Title = styled.h5`
  margin: 0;
  width: 100%;
  height: 40px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #1f1f1f;
`;

export const InputContainer = styled.div<LoginProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const InputContainerInput = styled(InputContainer)`
  padding-bottom: ${({ expanded }) => (expanded ? "0px" : "24px")};
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 16px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #a0a1a4;
  padding-bottom: 4px;
`;

export const InputField = styled.input<LoginProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 16px;
  gap: 8px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 12px;
  border-color: ${({ expanded }) => (expanded ? "#e65151" : "#000000")};
  outline-color: ${({ expanded }) => (expanded ? "#e65151" : "#000000")};
`;

export const Placeholder = styled.span`
  color: #a0a1a4;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  width: 100%;

  @media ${device.tablet} {
    gap: 15px;
    width: 100%;
  }
`;

export const PasswordToggle = styled.img<LoginProps>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Input = styled.div`
  width: 100%;
  position: relative;
`;

export const ForgotPasswordLink = styled.a<LoginProps>`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: ${({ expanded }) => (expanded ? "#FFFFFF" : "#9733ca")};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 18px 16px;
  width: 100%;
  height: 56px;
  background: ${({ disabled }) => (disabled ? "#c7c7c7" : "#F3A802")};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  @media ${device.tablet} {
    bottom: 24px;
    position: relative;
    width: 290px;
  }
`;

export const ButtonText = styled.span<LoginProps>`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${({ disabled }) => (disabled ? "#A0A1A4" : "#FFFFFF")};
`;
export const ErrorMail = styled.span`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #e65151;
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: 64px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
`;

export const NotificationIcon = styled.img`
  position: relative;
  right: 10px;
  top: 6px;
  width: 48px;
  height: 48px;
  @media ${device.tablet} {
    right: 0px;
  }
`;

export const NotificationText = styled.span`
  color: #ffffff;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    line-height: 16px;
  }
`;

export const NotificationInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  position: relative;
  right: 30px;
  @media ${device.tablet} {
    right: 0px;
  }
`;
export const NotificationLink = styled.div`
  position: relative;
  right: 80px;
  bottom: 20px;
  @media ${device.tablet} {
    right: 28px;
    bottom: 10px;
  }
`;
