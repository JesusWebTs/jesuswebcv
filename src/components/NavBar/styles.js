import styled from "styled-components";
import { mediaQuerys, colors } from "../../styles";

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.lightColors.color_1};
  justify-content: flex-end;
  padding: 5px;
  z-index: 10;
  ${mediaQuerys.desktopsAndLaptops} {
    padding: 0px;
    position: sticky;
    top: 0;
    height: fit-content;
  }
`;

const NavItem = styled.a`
  display: block;
  color: ${colors.lightColors.color_white};
  padding: 15px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  &:before {
    content: "<${(props) => props.name} />";
    position: absolute;
    background-color: ${colors.lightColors.color_3};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    transform: scale(0);
    transition: transform 0.2s ease;
  }
  &:hover:before {
    transform: scale(1);
  }
  ${mediaQuerys.desktopsAndLaptops} {
    width: 120px;
  }
`;

const NavItemContainer = styled.div`
  background-color: black;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  bottom: 0;
  z-index: -1;
  transition: transform 0.3s ease;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  transform: ${(prop) =>
    prop.show ? "translateY(calc(-60px))" : "translateY(100%)"};
  ${mediaQuerys.desktopsAndLaptops} {
    position: sticky;
    padding: 2px;
    display: flex;
    top: 0px;
    bottom: unset;
    transform: translateY(0);
    background-color: transparent;
  }
`;

const NavButton = styled.button`
  background-color: ${(props) =>
    props.show ? colors.lightColors.color_1 : colors.lightColors.color_3};
  border-radius: 5px;
  border: 1px solid ${colors.lightColors.color_white}66;
  color: ${colors.lightColors.color_white};
  height: 50px;
  margin-right: 15px;
  outline: none;
  right: 0;
  width: 50px;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.5s ease;

  ${mediaQuerys.desktopsAndLaptops} {
    display: none;
  }
  & svg {
    height: 45px;
    width: 45px;
  }
`;

export { NavContainer, NavItem, NavItemContainer, NavButton };
