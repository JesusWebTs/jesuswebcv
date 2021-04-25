import React from "react";
import { AboutMePage, SkillsPage } from "pages";
import content from "mooks/content";
export default [
  {
    title: "Acerca de Mi",
    href: "aboutme",
    section: <AboutMePage id="aboutme" content={content.aboutMook()} />,
  },
  {
    href: "myskills",
    section: (
      <SkillsPage id="myskills" content={content.skillsMook()} />
    ),
    title: "Mis Habilidades",
  },
  {
    href: "projects",
    section: <div id="projects">Proyectos</div>,

    title: "Proyectos",
  },
  {
    href: "contact",
    section: (
      <div id="contect" title="Contacto">
        Contacto
      </div>
    ),

    title: "Contacto",
  },

  {
    href: "experience",
    section: <div id="experience">Experiencia</div>,
    title: "Experiencia",
  },
];
