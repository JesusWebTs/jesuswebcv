import React from "react";

//Components

//Styles
import {
  FormStyled,
  InputStyled,
  InputContainerStyled,
  FormButton,
} from "./styles.js";

function ContactForm() {
  return (
    <>
      <FormStyled>
        <label>
          Nombre:
          <InputContainerStyled>
            <InputStyled type="text" value="Nombre" />
          </InputContainerStyled>
        </label>
        <label>
          Email:
          <InputContainerStyled>
            <InputStyled type="text" value="Email" />
          </InputContainerStyled>
        </label>
        <label>
          Compañia:
          <InputContainerStyled>
            <InputStyled type="text" value="Compañia" />
          </InputContainerStyled>
        </label>
        <label>
          Comentario:
          <InputContainerStyled>
            <InputStyled type="text" value="Comentario" />
          </InputContainerStyled>
        </label>
        <FormButton type="submit" onClick={(e) => e.preventDefault()} />
      </FormStyled>
    </>
  );
}

export default ContactForm;
