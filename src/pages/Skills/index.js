import React from "react";
//Components
import { SectionTitle, SkillCard } from "../../components";
//Styles
import { SectionContainer, GridContainer } from "../styles";

function SkillsPage({ id, content }) {
  return (
    <SectionContainer id={id}>
      <SectionTitle>{content.title}</SectionTitle>
      <GridContainer>
        {content.skills.map((skill) => (
          <SkillCard
            key={skill.skillName}
            skillName={skill.skillName}
            skillIconName={skill.skillIconName}
            color={skill.color}
            text={skill.text}
          />
        ))}
      </GridContainer>
    </SectionContainer>
  );
}

export default SkillsPage;
