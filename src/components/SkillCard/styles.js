import styled from "styled-components";

export const SkillTextStyled = styled.h3`
  text-align: center;
`;
export const SkillIconStyled = styled.div`
  width: 150px;
`;
export const SkillContainerStyled = styled.div`
  width: max-content;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 2px 2px 35px 0 ${(prop) => (prop.color ? prop.color : "black")};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover:before {
    opacity: 1;
  }
`;

export const SkillDescriptionStyled = styled.p`
  display: block;
  color: white;
  text-align: center;
  padding: 20px 10px;
`;

export const SkillDescriptionContainerStyled = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000099;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
