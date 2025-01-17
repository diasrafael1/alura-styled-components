import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./styles/temas";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BtnTema } from "./styles";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);

  function toggleTema() {
    setTema(!tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
