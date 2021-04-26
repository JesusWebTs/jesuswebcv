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

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
