import React from "react";
import { ContactCards, ContactForm, SectionTitle } from "../../components";
import { SectionContainer } from "../styles";

function ContactPage({ id, content }) {
  return (
    <SectionContainer id={id}>
      <SectionTitle>{content.title}</SectionTitle>
      <ContactCards></ContactCards>
      <ContactForm></ContactForm>
    </SectionContainer>
  );
}

export default ContactPage;
