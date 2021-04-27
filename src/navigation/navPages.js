import React from "react";
import { AboutMePage, SkillsPage } from "../pages";
import content from "../mooks/content";
import ContactPage from "../pages/Contact";
export default [
  {
    title: "inicio",
    href: ""
  },
  {
    title: "Acerca de Mi",
    href: "aboutme",
    section: <AboutMePage id="aboutme" content={content.aboutMook()} />,
  },
  {
    href: "myskills",
    section: <SkillsPage id="myskills" content={content.skillsMook()} />,
    title: "Mis Habilidades",
  },
  {
    href: "contact",
    section: (
      <ContactPage id="contact" content={content.contactMook()}></ContactPage>
    ),
    title: "Contacto",
  },
  /* {
    href: "projects",
    section: <div id="projects">Proyectos</div>,

    title: "Proyectos",
  },

  {
    href: "experience",
    section: <div id="experience">Experiencia</div>,
    title: "Experiencia",
  }, */
];
