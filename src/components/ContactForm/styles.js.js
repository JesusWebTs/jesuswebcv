import styled from "styled-components";
import useColor from "../../hooks/useColor";
import { mediaQuerys } from "../../styles";

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 10px;
  &:focus + label {
    transform: translateY(0%);
    font-size: 15px;
  }
`;
export const InputContainerStyled = styled.div`
  border-bottom: 2px solid ${() => useColor().color_4};
  padding: 2px 0;
  display: flex;
  flex-direction: column-reverse;
`;

export const TextAreaStyled = styled.textarea`
  border: 2px solid ${() => useColor().color_4};
  outline: none;
  min-height: 300px;
  resize: none;
  padding: 10px;
  &:focus + label {
    transform: translateY(0%);
    font-size: 18px;
  }
`;

export const TextAreaContainerStyled = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column-reverse;
`;

export const InputLabelStyled = styled.label`
  transform: ${({ filled = false }) =>
    filled ? `translateY(0%)` : `translateY(100%)`};
  transition-property: transform, font-size;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  margin-left: 10px;
  pointer-events: none;
`;

export const FormStyled = styled.form`
  box-shadow: 0 0 15px 1px ${() => useColor().color_1};
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
  background-color: ${() => useColor().color_white};
`;

export const FormButton = styled.input`
  align-self: flex-end;
  margin-top: 25px;
  width: 140px;
  height: 50px;
  border-radius: 5px;
  color: ${() => useColor().color_white};
  background-color: ${() => useColor().color_4};
  font-size: 20px;
  cursor: pointer;
`;
