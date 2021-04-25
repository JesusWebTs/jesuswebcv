import React from "react";
import { useSelector } from "react-redux";
import { SubTitleStyled } from "./styles";

function SubTitle({ children }) {
  const color = useSelector((state) => state.colors);
  return <SubTitleStyled color={color}>{children}</SubTitleStyled>;
}

export default SubTitle;
