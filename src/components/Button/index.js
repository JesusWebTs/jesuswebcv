import React from "react";
import { ButtonStyled } from "./styled";

function Button({ onClick, children }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

export default Button;
