import React, { useEffect } from "react";
import { Card, TextTitle, TextInfo, Button, ButtonText } from "./Success.style";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  return (
    <Card
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <TextTitle>Thank you for choosing Goalsetter</TextTitle>
      <TextInfo>
        At the moment, your account can only be used in the app. Sorry for the
        inconvenience.
      </TextInfo>
      <Button>
        <ButtonText>Download the app</ButtonText>
      </Button>
    </Card>
  );
};

export default Success;
