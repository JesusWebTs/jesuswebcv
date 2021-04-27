import styled from "styled-components";
import useColor from "../../hooks/useColor";

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
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const CardIcon = styled.i`
  display: flex;
  justify-content: space-evenly;
  color: ${() => useColor().color_4};
  & svg,
  & {
    font-size: 70px;
    width: 70px;
    height: 70px;
  }
`;
export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px 1px ${() => useColor().color_1};
  padding: 25px;
  border-radius: 5px;
  width: 300px;
  height: 150px;
`;
export const CardText = styled.h3``;

export const InputContainerStyled = styled.div``;

export const FormButton = styled.input``;
