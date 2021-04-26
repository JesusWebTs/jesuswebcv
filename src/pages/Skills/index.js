import React from "react";
//Components
import { SectionTitle, SkillCard } from "../../components";
//Styles
import { SectionContainer, GridContainer } from "../styles";

function SkillsPage({ id, content }) {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
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
    </div>
  );
}

export default SkillsPage;
