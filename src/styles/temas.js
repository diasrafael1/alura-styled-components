import {
  fundoClaro,
  textoFundoClaro,
  conteudoClaro,
  fundoEscuro,
  textoFundoEscuro,
  conteudoEscuro,
} from "./vars";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)",
};
