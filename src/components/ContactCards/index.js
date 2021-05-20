import React from "react";
import EmailIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

//Components
import { SocialMedia } from "..";
//Styles
import {
  ContactCard,
  CardText,
  CardIcon,
  CardsContainer,
} from "./styles.js.js";

function ContactForm() {
  return (
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
        <CardText>Teléfono</CardText>
        <a href="tel:+584140261666">(+58)4140261666</a>
      </ContactCard>
      <ContactCard>
        <CardIcon>#</CardIcon>
        <CardText>Redes Sociales</CardText>
        <SocialMedia />
      </ContactCard>
    </CardsContainer>
  );
}

export default ContactForm;
