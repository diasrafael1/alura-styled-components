import React from "react";
import { Card, Botao } from "../../styles";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <Card>
      {extratoLista.updates.map((extrato) => (
        <Itens key={extrato.id} {...extrato} />
      ))}
      <Botao>Ver mais</Botao>
    </Card>
  );
};

export default Extrato;
