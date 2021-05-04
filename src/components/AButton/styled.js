import styled from "styled-components";
import useColor from "../../hooks/useColor";

export const AStyled = styled.a`
  background-color: ${() => useColor().color_4};
  color: ${() => useColor().color_white};
  border: none;
  width: 170px;
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid ${() => useColor().color_white};
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: ${() => useColor().color_4}99;
  }
`;
