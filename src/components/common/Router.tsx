import React from "react";
import { AppContainer, ContentContainer } from "../../App.style";
import Header from "./Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Success from "../pages/Success";

const Router: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <AppContainer>
      <Header />
      <ContentContainer secondary={isLoginPage ? 1 : 0 }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
};

export default Router;
