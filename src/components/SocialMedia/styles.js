import styled from "styled-components";
import { colors } from "../../styles";

const { lightColors } = colors;

const socialMediasColors = {
  twitter: "#1DA1F2",
  github: "#4078c0",
  linkedin: "#0077b5",
};

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialMediaIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.color ? socialMediasColors[props.color] : "red"};
  color: ${lightColors.color_white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
