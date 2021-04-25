import styled from "styled-components";
import { mediaQuerys } from "../styles";

const SectionContainer = styled.section`
  min-height: 100vh;
  max-width: 90%;
  background-color: transparent;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${mediaQuerys.desktopsAndLaptops} {
    justify-content: stretch;
  }
`;

export { SectionContainer };
