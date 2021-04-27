import React from "react";
import { SubTitleStyled } from "./styles";

function SubTitle({ children, center }) {

  return (
    <SubTitleStyled  center={center}>
      {children}
    </SubTitleStyled>
  );
}

export default SubTitle;
