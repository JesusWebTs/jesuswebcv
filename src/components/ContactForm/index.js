import React from "react";
import EmailIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

//Components
import { SocialMedia } from "../../components";
//Styles
import {
  FormStyled,
  InputStyled,
  InputContainerStyled,
  ContactCard,
  CardText,
  CardIcon,
  CardsContainer,
  FormButton,
} from "./styles.js";

function ContactForm() {
  return (
    <>
      <CardsContainer>
        <ContactCard>
          <CardIcon>
            <EmailIcon />
          </CardIcon>
          <CardText>
            <a href="mailto:jesus.152006@gmail.com">Email</a>
          </CardText>
        </ContactCard>

        <ContactCard>
          <CardIcon>
            <PhoneIcon />
          </CardIcon>
          <CardText>Telefono</CardText>
          <a href="tel:+584140261666">(+58)4140261666</a>
        </ContactCard>
        <ContactCard>
          <CardIcon>#</CardIcon>
          <CardText>Social Media</CardText>
          <SocialMedia />
        </ContactCard>
      </CardsContainer>
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
