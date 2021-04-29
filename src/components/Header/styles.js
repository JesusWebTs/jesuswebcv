import styled from "styled-components";
//Styles
import { fontSizes } from "../../styles";

//Hooks
import useColor from "../../hooks/useColor";

const { ImageTitle } = fontSizes;

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
    background-color: ${() => useColor().color_1}44;
    z-index: 0;
  }
`;
const TextImage = styled.span`
  display: block;
  color: ${() => useColor().color_white};
  font-size: ${ImageTitle};
  z-index: 10;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 70%;
    bottom: 4px;
    width: 5px;
    animation-name: cursorAnimation;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;

    right: 0;
    transform: translateX(100%);
    background-color: ${() => useColor().color_white};
  }
  @keyframes cursorAnimation {
    0% {
      transform: translateX(100%) rotateX(180deg);
    }
    100% {
      transform: translateX(100%) rotateX(0deg);
    }
  }
`;

const SocialContainer = styled.div`
  z-index: 10;
`;

export { Header, HeroImage, TextImage, SocialContainer };
