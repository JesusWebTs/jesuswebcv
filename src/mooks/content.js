import JavaScriptImg from "../assets/icons/javascript-icon.svg";
import NodeJsImg from "../assets/icons/nodejs-icon.svg";
import ReactJsImg from "../assets/icons/reactjs-icon.svg";
import HTMLImg from "../assets/icons/w3_html5-icon.svg";
import CSS3Img from "../assets/icons/css3-icon.svg";
import GraphQLImg from "../assets/icons/graphql-icon.svg";
import JestImg from "../assets/icons/jestjsio-icon.svg";
import jQueryImg from "../assets/icons/jquery-icon.svg";

export const aboutMook = () => {
  return {
    title: "Acerca de Mi",
    history: {
      p_1: `Me llamo Richard de Jesús Martínez Shildes. Soy bachiller en ciencias, estudiante de ingeniería Mecatrónica y desarrollador junior Frontend, con conocimiento de Backend y bases de datos.`,
      p_2: `Desde marzo de 2020, a inicios de la pandemia en Latinoamérica, me he dedicado a realizar cursos on-line en tecnologías de desarrollo web para la maquetación e interactividad de interfaces. `,
    },
    whatIDo: {
      h3_1: `¿Qué es lo que hago?`,
      ol_1: [
        `Desarrollar  aplicaciones móviles y/o sitios web responsivos.`,
        `Desarrollar interfaces de usuario basados en los conceptos básicos de UI.`,
        `Desarrollar aplicaciones en el lado del servidor con patrones y estructuras de diseño.`,
        `Administración y normalización de bases de datos.`,
      ],
    },
    attitudes: {
      h3_1: `Actitudes`,
      ol_1: [
        `Autodidacta, soy capaz de aprender y aplicar nuevos conocimientos sin necesidad de utilizar educación formal.`,
        `Colaborador, puedo adaptarme fácilmente a cualquier equipo de trabajo ya que disfruto de colaborar para obtener buenos resultados.`,
        `Responsable, trato siempre de entregar el mejor resultado posible en el tiempo establecido.`,
      ],
    },
    interests: {
      h3_1: `¿Cuáles son mis intereses?`,
      p_1: `Actualmente estoy interesado en mejorar mi nivel de inglés para hablarlo de manera fluida. Además de obtener experiencia para convertirme en un desarrollador web senior. Y en un futuro cercano poder aprender a programar en Python y Typescript para el desarrollo de IA’s y deep learning.`,
    },
  };
};

export const skillsMook = () => {
  return {
    title: "Mis Habilidades",
    skills: [
      {
        skillName: "HTML",
        skillIconName: HTMLImg,
        percentage: 70,
        color: "#FF5733",
        text: "¡Maquetemos paginas utilizando el ultimo estandart de HTML5!",
      },
      {
        skillName: "CSS3",
        skillIconName: CSS3Img,
        percentage: 65,
        color: "#2062AF",
        text:
          "¡Demosle vida a nuestros proyecto utilizando las ultimas caracteristicas de CSS3",
      },
      {
        skillName: "JavaScript",
        skillIconName: JavaScriptImg,
        percentage: 60,
        color: "#F7DF1E",
        text:
          "¿Interactividad? Eso es muy importante, ¡Agreguemos muchos botones!",
      },
      {
        skillName: "NodeJs",
        skillIconName: NodeJsImg,
        percentage: 50,
        color: "#8CC84B",
        text:
          "Hagamos un backend utilizando las mejores practicas de js con NodeJs.",
      },
      {
        skillName: "ReactJs",
        skillIconName: ReactJsImg,
        percentage: 65,
        color: "#00D8FF",
        text:
          "¡Usemos puro musculo para desarrollar grandes proyectos muy rapido!",
      },
      {
        skillName: "GraphQL",
        skillIconName: GraphQLImg,
        percentage: 45,
        color: "#E10098",
        text:
          "¡No nos agobiemos con complicadas consultas a base de datos, todo lo necesario esta aqui!",
      },
      {
        skillName: "Jest",
        skillIconName: JestImg,
        percentage: 40,
        color: "#99424F",
        text:
          "¡Desarrollemos proyectos a prueba de fallos, es mejor ser precavido!",
      },
      {
        skillName: "jQuery",
        skillIconName: jQueryImg,
        percentage: 35,
        color: "#0868AC",
        text:
          "¿Tienes un proyecto viejo?, ¿Necesitas soporte? ¡No hay problema!",
      },
    ],
  };
};

export const contactMook = () => {
  return {
    title: "Contacto",
  };
};
