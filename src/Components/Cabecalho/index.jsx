import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Logo, StyledHeader, BtnHeader } from "./styles";

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <nav>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">Sair</BtnHeader>
      </nav>
    </StyledHeader>
  );
};

export default Cabecalho;
