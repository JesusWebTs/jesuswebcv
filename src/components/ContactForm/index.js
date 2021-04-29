import React from "react";
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
} from "./styles.js";

function ContactForm({ direction = "column" }) {
  const { changeField, formState } = useFormState();
  const { sendMail } = useSendmail();

  const { closeModal, openModal, showModal } = useModal();
  return (
    <>
      <FormStyled>
        <InfoContainerStyled direction={direction}>
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
            <InputLabelStyled
              filled={formState.name ? true : false}
              htmlFor="name"
            >
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
              type="email"
              id="email"
            />
            <InputLabelStyled
              filled={formState.email ? true : false}
              htmlFor="email"
            >
              Email:
            </InputLabelStyled>
          </InputContainerStyled>
        </InfoContainerStyled>
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
            return sendMail(formState)
              .then(() => {
                openModal();
                setTimeout(() => closeModal(), 5000);
              })
              .catch((err) => console.log(err));
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
