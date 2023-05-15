import React from "react";
import { HeaderContainer, LogoWrapper } from "./Header.style";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";

const Header: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" ? 1 : 0;

  return (
    <HeaderContainer data-testid="header-container" secondary={isLoginPage}>
      <LogoWrapper data-testid="logo-wrapper">
        <Logo second={!!isLoginPage} />
      </LogoWrapper>
    </HeaderContainer>
  );
};

export default Header;
