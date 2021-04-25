import styled from "styled-components";
import { colors, fontSizes } from "styles";

const { ImageTitle } = fontSizes;
const { lightColors } = colors;

const Header = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
`;
const HeroImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  background-attachment: fixed;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.lightColors.color_black}44;
    z-index: 0;
  }
`;
const TextImage = styled.span`
  display: block;
  color: ${lightColors.color_white};
  font-size: ${ImageTitle};
  z-index: 10;
`;

const SocialContainer = styled.div`
  z-index: 10;
`;

export { Header, HeroImage, TextImage, SocialContainer };
