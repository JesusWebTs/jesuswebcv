import React, { useEffect } from "react";
import useFormState from "./hook/useFormState";
import { useSendmail } from "./hook/useSendMail";
//Components

//Styles
import {
  FormStyled,
  InputStyled,
  InputContainerStyled,
  FormButton,
  TextAreaStyled,
  InputLabelStyled,
  TextAreaContainerStyled,
} from "./styles.js";

function ContactForm() {
  const { changeField, formState } = useFormState();
  const { sendMail } = useSendmail();
  return (
    <FormStyled>
      <InputContainerStyled>
        <InputStyled
          autoComplete="off"
          value={formState.name}
          onChange={(e) =>
            changeField({ type: "CHANGE_NAME", payload: e.target.value })
          }
          type="text"
          id="name"
        />
        <InputLabelStyled filled={formState.name ? true : false} htmlFor="name">
          Nombre:
        </InputLabelStyled>
      </InputContainerStyled>
      <InputContainerStyled>
        <InputStyled
          autoComplete="off"
          value={formState.email}
          onChange={(e) =>
            changeField({ type: "CHANGE_EMAIL", payload: e.target.value })
          }
          type="text"
          id="email"
        />
        <InputLabelStyled
          filled={formState.email ? true : false}
          htmlFor="email"
        >
          Email:
        </InputLabelStyled>
      </InputContainerStyled>
      <InputContainerStyled>
        <InputStyled
          autoComplete="off"
          value={formState.company}
          onChange={(e) =>
            changeField({ type: "CHANGE_COMPANY", payload: e.target.value })
          }
          type="text"
          id="company"
        />
        <InputLabelStyled
          filled={formState.company ? true : false}
          htmlFor="company"
        >
          Compañia:
        </InputLabelStyled>
      </InputContainerStyled>
      <TextAreaContainerStyled>
        <TextAreaStyled
          value={formState.comment}
          onChange={(e) =>
            changeField({ type: "CHANGE_COMMENT", payload: e.target.value })
          }
          id="comment"
        />
        <InputLabelStyled
          filled={formState.comment ? true : false}
          htmlFor="comment"
        >
          Comentario:
        </InputLabelStyled>
      </TextAreaContainerStyled>
      <FormButton
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          return sendMail(formState);
        }}
      />
    </FormStyled>
  );
}

export default ContactForm;
