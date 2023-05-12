import React from 'react';
import { HeaderContainer, Logo } from '../../assets/styles/Header.style';
import logo from '../../assets/svg/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
