import React from "react";

import Conta from "../Conta";
import Extrato from "../Extrato";
import { Titulo } from "../Titulo";
import { Main, Conteudo } from "./styles";

const Container = () => {
  return (
    <Main>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Main>
  );
};

export default Container;
