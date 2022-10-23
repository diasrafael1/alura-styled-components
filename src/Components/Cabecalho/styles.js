import styled from "styled-components";
import { corPrimaria } from "../../styles/vars";

export const StyledHeader = styled.header`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;
