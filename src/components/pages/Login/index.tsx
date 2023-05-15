import React, { useState, useEffect } from "react";
import {
  Card,
  ForgotPasswordLink,
  InputContainer,
  InputField,
  InputLabel,
  InputsContainer,
  Title,
  Button,
  ButtonText,
  PasswordToggle,
  ErrorMail,
  Notification,
  NotificationText,
  NotificationIcon,
  InputContainerInput,
  Input,
} from "./Login.styles";
import eyeClosed from "../../../assets/svg/Close-eye.svg";
import eyeOpen from "../../../assets/svg/Open-eye.svg";
import notificationSvg from "../../../assets/svg/Notification.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";

const formatPhoneNumber = (value = ''): string => {
  const match = value
    .replace(/\D+/g, '')
    .match(/([^\d]*\d[^\d]*){1,10}$/)?.[0] || '';
  const part1 = match.length > 2 ? `(${match.substring(0, 3)})` : match;
  const part2 = match.length > 3 ? ` ${match.substring(3, 6)}` : '';
  const part3 = match.length > 6 ? `-${match.substring(6, 10)}` : '';
  return `${part1}${part2}${part3}`;
};


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const isEmailValid = email.length > 0;
    const isPasswordValid = password.length > 0;

    setIsValid(isEmailValid && isPasswordValid && !emailError);
  }, [email, password, emailError]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const value = e.target.value;
    let formattedValue = value;

    if (/([^\d]*\d[^\d]*){1,10}$/.test(value)) {
      formattedValue = formatPhoneNumber(value);
    }

    setEmail(formattedValue);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isNumberValid = /^\(\d{3}\)\s?\d{3}-\d{4}$/.test(formattedValue);

    setEmailError(!isEmailValid && !isNumberValid);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email && password) {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await login(email, password);

        if (response?.status === 200) {
          setIsLoading(false);
          navigate("/success");
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <Card expanded={isError ? 1 : 0}>
      <Title>Log in</Title>
      {isError && (
        <Notification initial={{ opacity: 0,}} animate={{opacity: 1}}
        >
          <NotificationIcon src={notificationSvg} alt="Notification" />

          <NotificationText>
            <p>Your email or password is incorrect. Try again.</p>
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </NotificationText>
        </Notification>
      )}
      <InputsContainer>
        <InputContainerInput expanded={emailError ? 1 : 0}>
          <InputLabel>Email Address or Phone Number</InputLabel>
          <InputField
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ej: hello@goalsetter.co or (999) 999-9999"
            expanded={emailError ? 1 : 0}
          />
          {emailError && (
            <ErrorMail>Enter a valid Email Address or Phone Number</ErrorMail>
          )}
        </InputContainerInput>
        <InputContainer>
          <InputLabel data-testid="Password">Password</InputLabel>
          <Input>
            <InputField
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <PasswordToggle
              src={showPassword ? eyeOpen : eyeClosed}
              alt="Password visibility toggle"
              onClick={toggleShowPassword}
              expanded={showPassword ? 1 : 0}
            />
          </Input>
        </InputContainer>
        <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
      </InputsContainer>
      <Button
        data-testid="button-continue"
        onClick={handleLogin}
        disabled={!isValid}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <ButtonText disabled={!isValid}>Continue</ButtonText>
        )}
      </Button>
    </Card>
  );
};

export default Login;
