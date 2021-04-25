import React from "react";
import { TitleStyled } from "./styles";

function SectionTitle({ children, content }) {
  return (
    <div>
      <TitleStyled>{children}</TitleStyled>
    </div>
  );
}

export default SectionTitle;
