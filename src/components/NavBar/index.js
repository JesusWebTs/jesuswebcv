import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

//Styles
import { NavContainer, NavButton, NavItem, NavItemContainer } from "./styles";

function NavBar({ pages = [] }) {
  const [show, setShow] = useState(false);
  return (
    <NavContainer>
      <NavItemContainer show={show}>
        {pages.map((page) => (
          <NavItem
            key={page.title}
            name={page.title}
            onClick={() => setShow(false)}
            href={`#${page.href}`}
          >
            {page.title}
          </NavItem>
        ))}
      </NavItemContainer>
      <NavButton onClick={() => setShow((prevState) => !prevState)} show={show}>
        <MenuIcon />
      </NavButton>
      ;
    </NavContainer>
  );
}
export default NavBar;
