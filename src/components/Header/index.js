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
} from "../../components";
import { useTextAnimation } from "./hooks/useTextAnimation";

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
          <Button onClick={openModal}>¡Contactame!</Button>
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
