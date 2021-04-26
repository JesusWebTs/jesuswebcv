import  JavaScriptImg from "assets/icons/javascript-icon.svg" 
import  NodeJsImg from "assets/icons/nodejs-icon.svg" 
import  ReactJsImg from "assets/icons/reactjs-icon.svg" 
import  HTMLImg from "assets/icons/w3_html5-icon.svg" 
import  CSS3Img from "assets/icons/css3-icon.svg" 
import  GraphQLImg from "assets/icons/graphql-icon.svg" 
import  JestImg from "assets/icons/jestjsio-icon.svg" 
import  jQueryImg from "assets/icons/jquery-icon.svg" 

const aboutMook = () => {
  return {
    title: "Acerca de Mi",
    history: {
      p_1: `¡Hola! Mi nombre es Richard de Jesús, soy estudiante de ingeniería Mecatrónica cursando actual el ultimo semestre en mi carrera.`,
      p_2: `En el ultimo año me he dedicado a mejorar en tecnologías por las que siento pasión y me gusta seguir actualizándome y aprendiendo nuevas herramientas para resolver problemas desde una nueva perspectiva.`,
      p_3: `Desde inicios de la pandemia se ha dificultado enorme mente la posibilidad de conseguir la titulación universitaria no obstante debido a mi interés en la tecnología no deje de aprender.`,
    },
    whatIDo: {
      h3_1: `¿Qué es lo que hago?`,
      ol_1: [
        `Desarrollado de aplicaciones móviles y/o sitios web responsivas.`,
        `Desarrollo de interfaces de usuario basados en los conceptos básicos de UI.`,
        `Desarrollo a aplicaciones en el lado del servidor con patrones y estructuras de diseño.`,
        `Administración y normalización de bases de datos.`,
      ],
    },
    attitudes: {
      h3_1: `¿Cómo es mi forma de trabajar?`,
      p_1: `Lo mejor de este mundo es cumplir con pequeños tópicos e ir avanzando para siempre tener un producto que entregar. Así es la metodología SCRUM me parece una gran forma de trabajar en equipo.`,
      p_2: `No tengo ningún tipo de inconveniente en ayudar a un compañero cuando lo necesite debido a que siempre se aprende de los errores.`,
    },
    interests: {
      h3_1: `¿Cuáles son mis intereses?`,
      p_1: `En el pasado año he desarrollado un fuerte interés por desarrollo de IA y deep learning por lo que en un futuro me gustaría aprender PY (python) y comenzar en este maravilloso mundo.`,
      p_2: `Otro objetivo que tengo muy claro es mejorar mi nivel de ingles conversacional y escrito. `,
    },
  };
};




const skillsMook = () => {
  return  {
    title: "Mis Habilidades",
    skills: [
      {
        skillName: "HTML",
        skillIconName: HTMLImg,
        percentage: 70,
      },
      {
        skillName: "CSS3",
        skillIconName: CSS3Img,
        percentage: 65,
      },
      {
        skillName: "JavaScript",
        skillIconName: JavaScriptImg,
        percentage: 60,
      },
      {
        skillName: "NodeJs",
        skillIconName: NodeJsImg,
        percentage: 50,
      },
      {
        skillName: "ReactJs",
        skillIconName: ReactJsImg,
        percentage: 65,
      },
      
      {
        skillName: "GraphQL",
        skillIconName: GraphQLImg,
        percentage: 45,
      },
      {
        skillName: "Jest",
        skillIconName: JestImg,
        percentage: 40,
      },
      {
        skillName: "jQuery",
        skillIconName: jQueryImg,
        percentage: 35,
      },
    ]
  }
};
export default { aboutMook, skillsMook };