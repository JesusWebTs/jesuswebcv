import styled from "styled-components";
import useColor from "../../hooks/useColor";
import { mediaQuerys } from "../../styles";

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${() => useColor().color_4};
`;
export const TextAreaStyled = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${() => useColor().color_4};
`;

export const FormStyled = styled.form`
  border: 1px solid ${() => useColor().color_1};
  border-radius: 15px;
  padding: 20px;
  margin: 50px;
  width: 70%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const InputContainerStyled = styled.div``;

export const FormButton = styled.input`
  align-self: flex-end;
`;
