import React from "react";
import pages from "../../navigation/navPages";
//Styles
import { Header, HeroImage, TextImage, SocialContainer } from "./styles";
//Assets
import headerImage from "../../assets/images/header-image.webp";
//Hooks
import { useModal } from "../../hooks/useModal";
//Components
import {
  NavBar,
  SocialMedia,
  Button,
  ContactForm,
  Modal,
  AButton,
} from "../../components";
import { useTextAnimation } from "./hooks/useTextAnimation";
import cv from "../../assets/cv/Jesus-Web-Curriculum.pdf";

function HeaderComponent({ id }) {
  const { word } = useTextAnimation({ targetWord: "<Jesús Web />" });
  const { openModal, closeModal, showModal } = useModal();

  return (
    <>
      <Header id={id}>
        <HeroImage style={{ backgroundImage: `url(${headerImage})` }}>
          <TextImage>{word}</TextImage>
          <SocialContainer>
            <SocialMedia />
          </SocialContainer>
          <div style={{ display: "flex", gap: "15px" }}>
            <Button onClick={openModal}>¡Contactame!</Button>
            <AButton href={cv} download>
              Descarga Mi CV
            </AButton>
          </div>
        </HeroImage>
      </Header>
      <NavBar pages={pages}></NavBar>
      <Modal show={showModal} closeModal={closeModal}>
        <ContactForm></ContactForm>
      </Modal>
    </>
  );
}

export default HeaderComponent;
