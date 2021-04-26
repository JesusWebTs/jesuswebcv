import React, { useEffect, useState } from "react";

export function useTextAnimation({ targetWord, time = 200 }) {
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);

  let interval;

  useEffect(() => {
    interval = setTimeout(() => {
      setIndex((prevState) => prevState + 1);
      setWord((prevState) => `${prevState}${targetWord[index]}`);
    }, 200);
    if (index > targetWord.length-1) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return { word, index };
}
