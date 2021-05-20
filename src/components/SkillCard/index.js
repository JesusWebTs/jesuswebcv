import React from "react";
import {
  SkillContainerStyled,
  SkillIconStyled,
  SkillTextStyled,
  SkillDescriptionStyled,
  SkillDescriptionContainerStyled
} from "./styles";

function SkillCard({ skillName, skillIconName, color, text }) {
  return (
    <SkillContainerStyled color={color} text={text}>
      <SkillTextStyled>{skillName}</SkillTextStyled>
      <SkillIconStyled>
        <img width="100%" src={skillIconName} alt={text}></img>
      </SkillIconStyled>
      <SkillDescriptionContainerStyled>
        <SkillDescriptionStyled>{text}</SkillDescriptionStyled>
      </SkillDescriptionContainerStyled>
    </SkillContainerStyled>
  );
}

export default SkillCard;
