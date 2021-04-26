import React from "react";
//Components
import { SectionTitle, SkillCard } from "components";
//Styles
import { SectionContainer, FlexContainer } from "pages/styles";

function SkillsPage({ id, content }) {
  console.log(content);
  return (
    <SectionContainer id={id}>
      <SectionTitle>{content.title}</SectionTitle>
      <FlexContainer>
        {content.skills.map((skill) => (
          <SkillCard
            skillName={skill.skillName}
            skillIcon={skill.skillIconName}
          />
        ))}
      </FlexContainer>
    </SectionContainer>
  );
}

export default SkillsPage;
