import styled from "styled-components";
import useColor from "../../hooks/useColor";
import { mediaQuerys } from "../../styles";

export const CardsContainer = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  ${mediaQuerys.desktopsAndLaptops} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const CardIcon = styled.i`
  display: flex;
  justify-content: space-evenly;
  color: ${() => useColor().color_4};
  & svg,
  & {
    font-size: 70px;
    width: 70px;
    height: 70px;
  }
`;
export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px 1px ${() => useColor().color_1};
  padding: 25px;
  border-radius: 5px;
  width: 300px;
  height: 150px;
`;
export const CardText = styled.h3``;

