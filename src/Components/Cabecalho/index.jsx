import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { Logo, StyledHeader } from "./styles";

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <nav>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </nav>
    </StyledHeader>
  );
};

export default Cabecalho;
