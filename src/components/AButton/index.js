import React from "react";
import { AStyled } from "./styled";

function AButton({ onClick, children, href }) {
  return (
    <AStyled onClick={onClick} href={href} download target="_blank">
      {children}
    </AStyled>
  );
}

export default AButton;
