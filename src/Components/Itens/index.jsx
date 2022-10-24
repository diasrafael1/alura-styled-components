import React from "react";
import ImageFilter from "../ImageFilter";
import Item from "./Item";
import { ItensContainer } from "./styles";

const Itens = ({ type, from, value, date }) => {
  return (
    <ItensContainer>
      {ImageFilter(type)}
      <Item type={type} from={from} value={value} />
      <span>{date}</span>
    </ItensContainer>
  );
};

export default Itens;
