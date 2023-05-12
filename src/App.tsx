import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import { AppContainer, ContentContainer } from "./assets/styles/App.style";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Agrega otras rutas aquí */}
          </Routes>
        </ContentContainer>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
