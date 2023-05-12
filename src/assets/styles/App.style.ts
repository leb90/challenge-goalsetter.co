import styled from "styled-components";
import backgroundImage from "../images/background.png";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const ContentContainer = styled.main`
  background: #500f71;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
