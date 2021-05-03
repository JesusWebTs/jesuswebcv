import React from "react";
import { AboutMePage, SkillsPage, ContactPage } from "../pages";
import { aboutMook, contactMook, skillsMook } from "../mooks/content";

const pageContent = [
  {
    title: "inicio",
    href: "",
  },
  {
    title: "Acerca de Mi",
    href: "aboutme",
    section: <AboutMePage id="aboutme" content={aboutMook()} />,
  },
  {
    href: "myskills",
    section: <SkillsPage id="myskills" content={skillsMook()} />,
    title: "Mis Habilidades",
  },
  {
    href: "contact",
    section: (
      <ContactPage id="contact" content={contactMook()}></ContactPage>
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

export default pageContent;
