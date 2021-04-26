import React from "react";
import { useSelector } from "react-redux";
import { SubTitleStyled } from "./styles";

function SubTitle({ children, center }) {
  const color = useSelector((state) => state.colors);
  return (
    <SubTitleStyled color={color} center={center}>
      {children}
    </SubTitleStyled>
  );
}

export default SubTitle;
