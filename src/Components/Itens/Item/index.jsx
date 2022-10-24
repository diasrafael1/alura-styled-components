import React from "react";
import { ItemContainer } from "./styles";

const Item = ({ type, from, value }) => {
  return (
    <ItemContainer>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </ItemContainer>
  );
};

export default Item;
