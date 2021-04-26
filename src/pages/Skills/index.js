import React from "react";
//Components
import { SectionTitle, SkillCard } from "components";
//Styles
import { SectionContainer } from "pages/styles";

function SkillsPage({ id, content }) {
  console.log(content);
  return (
    <SectionContainer>
      <SectionTitle>{content.title}</SectionTitle>
      {content.skills.map((skill) => (
        <SkillCard        
          skillName={skill.skillName}
          skillIcon={skill.skillIconName}
        />
      ))}
    </SectionContainer>
  );
}

export default SkillsPage;
