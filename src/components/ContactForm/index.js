import React, { useEffect, useState } from "react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

//hooks
import { useModal } from "../../hooks/useModal";
import { useSendmail } from "./hook/useSendMail";
import useFormState from "./hook/useFormState";

import Modal from "../Modal";
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
  InfoContainerStyled,
  ThankModalStyled,
  IconStyled,
  FieldError,
} from "./styles.js";
import { useValidateField } from "./hook/useValidateField";

function ContactForm({ direction = "column" }) {
  const { changeField, formState } = useFormState();
  const { sendMail } = useSendmail();
  const { closeModal, openModal, showModal } = useModal();
  const [error, setError] = useState(true);
  const [submit, setSubmit] = useState(false);

  const [errorName, validName] = useValidateField({
    field: "Nombre",
    regExp: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    minSize: 5,
    maxSize: 30,
    example: "Jose Perez",
    text: formState.name,
  });
  const [errorEmail, validEmail] = useValidateField({
    field: "Email",
    regExp: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    minSize: 5,
    maxSize: null,
    example: "email@example.com",
    text: formState.email,
  });
  const [errorCompany, validCompany] = useValidateField({
    field: "Compañia",
    regExp: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    minSize: 4,
    maxSize: 30,
    example: "Compañia Ejemplo",
    text: formState.company,
  });
  const [errorComment, validComment] = useValidateField({
    field: "Comentario",
    regExp: "",
    minSize: 10,
    maxSize: 500,
    example: "Esto es un comentario de ejemplo",
    text: formState.comment,
  });

  useEffect(() => {
    validName();
    validEmail();
    validCompany();
    validComment();
  }, []);

  useEffect(() => {
    if (errorName || errorEmail || errorCompany || errorComment) {
      setError(true);
    } else {
      setError(false);
    }
    return () => {};
  }, [errorName, errorEmail, errorCompany, errorComment]);

  return (
    <>
      <FormStyled>
        <InfoContainerStyled direction={direction}>
          <div>
            <InputContainerStyled>
              <InputStyled
                autoComplete="off"
                value={formState.name}
                onChange={(e) => {
                  validName();
                  return changeField({
                    type: "CHANGE_NAME",
                    payload: e.target.value,
                  });
                }}
                type="text"
                id="name"
              />
              <InputLabelStyled
                filled={formState.name ? true : false}
                htmlFor="name"
              >
                Nombre:
              </InputLabelStyled>
            </InputContainerStyled>
            {errorName && submit ? <FieldError>{errorName}</FieldError> : null}
          </div>
          <div>
            <InputContainerStyled>
              <InputStyled
                autoComplete="off"
                value={formState.email}
                onChange={(e) => {
                  validEmail();
                  return changeField({
                    type: "CHANGE_EMAIL",
                    payload: e.target.value,
                  });
                }}
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
            {errorEmail && submit ? (
              <FieldError>{errorEmail}</FieldError>
            ) : null}
          </div>
        </InfoContainerStyled>
        <div>
          <InputContainerStyled>
            <InputStyled
              autoComplete="off"
              value={formState.company}
              onChange={(e) => {
                validCompany();
                return changeField({
                  type: "CHANGE_COMPANY",
                  payload: e.target.value,
                });
              }}
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
          {errorCompany && submit ? (
            <FieldError>{errorCompany}</FieldError>
          ) : null}
        </div>
        <div>
          <TextAreaContainerStyled>
            <TextAreaStyled
              value={formState.comment}
              onChange={(e) => {
                validComment();
                return changeField({
                  type: "CHANGE_COMMENT",
                  payload: e.target.value,
                });
              }}
              id="comment"
            />
            <InputLabelStyled
              filled={formState.comment ? true : false}
              htmlFor="comment"
            >
              Comentario:
            </InputLabelStyled>
          </TextAreaContainerStyled>
          {errorComment && submit ? (
            <FieldError>{errorComment}</FieldError>
          ) : null}
        </div>
        <FormButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmit(true);
            if (error) {
              return false;
            } else {
              return sendMail(formState)
                .then(() => {
                  openModal();
                  setTimeout(() => closeModal(), 5000);
                  changeField({ type: "CHANGE_EMAIL", payload: "" });
                  changeField({ type: "CHANGE_NAME", payload: "" });
                  changeField({ type: "CHANGE_COMPANY", payload: "" });
                  changeField({ type: "CHANGE_COMMENT", payload: "" });
                })
                .catch((err) => console.log(err));
            }
          }}
        />
      </FormStyled>
      <Modal show={showModal} closeModal={closeModal}>
        <ThankModalStyled>
          <h3>Hola {formState.name} ¡Muchas gracias por contactarme!</h3>
          <p style={{ fontSize: 30 }}>¡Tenga un feliz dia!</p>
          <IconStyled>
            <EmojiEmotionsIcon />
          </IconStyled>
        </ThankModalStyled>
      </Modal>
    </>
  );
}

export default ContactForm;
