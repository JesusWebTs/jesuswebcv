import styled from "styled-components";
import { colors, fontSizes } from "styles";

const TitleStyled = styled.h2`
  color: ${colors.lightColors.color_black};
  font-size: ${fontSizes.title};
  font-weight: 600;
  margin-top: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: ${colors.lightColors.color_4};
    width: 100%;
    height: 4px;
    bottom: -4px;
  }
`;

export { TitleStyled };
