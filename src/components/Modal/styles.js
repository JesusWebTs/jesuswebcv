import styled from "styled-components";
import useColor from "../../hooks/useColor";
import { mediaQuerys } from "../../styles";

export const ModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000050;
  z-index: 10;
  backdrop-filter: blur(3px);
  transition-property: backdrop-filter, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
  right: 0;
  position: absolute;
  margin: 25px;
  background-color: ${() => useColor().color_white};
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  width: 50px;
  height: 50px;
  }
  & svg {
    width: 50px;
    height: 50px;
    color: ${() => useColor().color_4};
    transition: color 0.3s ease;
    &:hover {
      color: ${() => useColor().color_4}99;
    }
  }
`;

export const Modalcontent = styled.div`
  background-color: ${() => useColor().color_5};
  border-radius: 10px;
  width: 600px;
`;
