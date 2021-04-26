import React from "react";
import {
  SkillContainerStyled,
  SkillIconStyled,
  SkillTextStyled,
  SkillDescriptionStyled,
} from "./styles";

function SkillCard({ skillName, skillIconName, color, text }) {
  return (
    <SkillContainerStyled color={color} text={text}>
      <SkillTextStyled>{skillName}</SkillTextStyled>
      <SkillIconStyled>
        <img width="100%" src={skillIconName}></img>
      </SkillIconStyled>
      <SkillDescriptionStyled>{text}</SkillDescriptionStyled>
    </SkillContainerStyled>
  );
}

export default SkillCard;
