import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./styles/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
