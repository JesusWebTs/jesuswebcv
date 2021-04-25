import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SubTitle, SectionTitle } from "../../components";
import { SectionContainer } from "../styles";

import { darkMode, lightMode } from "../../redux";

function AboutMePage({ id, content }) {
  const { history, whatIDo, attitudes, interests } = content;
  const [color, setColor] = useState(false);
  const colorDef = useSelector((state) => state.colors);
  const dispath = useDispatch();

  useEffect(() => {
    console.log(colorDef);
    return () => {};
  }, [color]);

  const changeColor = () => {
    if (color) {
      setColor(false);
      dispath(lightMode());
    } else {
      setColor(true);
      dispath(darkMode());
    }
  };

  return (
    <SectionContainer id={id}>
      <SectionTitle>{content.title}</SectionTitle>
      <div>
        <p>{history.p_1}</p>
        <p>{history.p_2}</p>
        <p>{history.p_3}</p>
      </div>
      <article>
        <header>
          <SubTitle>{whatIDo.h3_1}</SubTitle>
        </header>
        <ol>
          {whatIDo.ol_1.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ol>
      </article>
      <article>
        <header>
          <SubTitle>{attitudes.h3_1}</SubTitle>
        </header>
        <p>{attitudes.p_1}</p>
        <p>{attitudes.p_2}</p>
      </article>
      <article>
        <header>
          <SubTitle>{interests.h3_1}</SubTitle>
        </header>
        <p>{interests.p_1}</p>
        <p>{interests.p_2}</p>
      </article>
      <button onClick={changeColor}>Imprimir</button>
    </SectionContainer>
  );
}

export default AboutMePage;
