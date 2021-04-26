import styled from "styled-components";
import { mediaQuerys } from "../styles";

export const SectionContainer = styled.section`
  /* min-height: 100vh; */
  max-width: 90%;
  background-color: transparent;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${mediaQuerys.desktopsAndLaptops} {
    justify-content: stretch;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px 50px;
  
  justify-items: center;
  align-items: center;
  ${mediaQuerys.iPadsLandscape} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQuerys.desktopsAndLaptops} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
