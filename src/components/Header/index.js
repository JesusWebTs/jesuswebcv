import React from "react";
import pages from "../../navigation/navPages";
import { useSelector } from "react-redux";
//Styles
import { Header, HeroImage, TextImage, SocialContainer } from "./styles";
//Assets
import headerImage from "../../assets/images/header-image.webp";

//Components
import { NavBar, SocialMedia } from "../../components";

function HeaderComponent() {
  const color = useSelector((state) => state.colors);
  return (
    <>
      <Header color={color}>
        <HeroImage style={{ backgroundImage: `url(${headerImage})` }} color={color}>
          <TextImage color={color}>{"<Jesús Web />"}</TextImage>
          <SocialContainer color={color}>
            <SocialMedia color={color}/>
          </SocialContainer>
        </HeroImage>
      </Header>
      <NavBar pages={pages}></NavBar>
    </>
  );
}

export default HeaderComponent;
