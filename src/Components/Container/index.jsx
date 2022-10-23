import React from "react";

import Conta from "../Conta";
import { Titulo } from "../Titulo";

const Container = () => {
  return (
    <div className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
