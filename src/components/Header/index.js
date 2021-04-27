import React from "react";
import pages from "../../navigation/navPages";
import { useSelector } from "react-redux";
//Styles
import { Header, HeroImage, TextImage, SocialContainer } from "./styles";
//Assets
import headerImage from "../../assets/images/header-image.webp";

//Components
import { NavBar, SocialMedia } from "../../components";
import { useTextAnimation } from "./hooks/useTextAnimation";

function HeaderComponent({id}) {
  const { word } = useTextAnimation({ targetWord: "<Jesús Web />" });

  return (
    <>
      <Header id={id}>
        <HeroImage style={{ backgroundImage: `url(${headerImage})` }}>
          <TextImage>{word}</TextImage>
          <SocialContainer>
            <SocialMedia />
          </SocialContainer>
        </HeroImage>
      </Header>
      <NavBar pages={pages}></NavBar>
    </>
  );
}

export default HeaderComponent;
