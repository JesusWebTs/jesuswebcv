import React from "react";
import { ContactForm, SectionTitle } from "../../components";
import { SectionContainer } from "../styles";

function ContactPage({ id, content }) {
  return (
    <SectionContainer id={id}>
      <SectionTitle>{content.title}</SectionTitle>
      <ContactForm></ContactForm>
    </SectionContainer>
  );
}

export default ContactPage;
