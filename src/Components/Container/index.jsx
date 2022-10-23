import React from "react";

import Conta from "../Conta";
import { Titulo } from "../Titulo";
import { Main, Conteudo } from "./styles";

const Container = () => {
  return (
    <Main>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Main>
  );
};

export default Container;
