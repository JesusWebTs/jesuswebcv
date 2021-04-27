import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useColor() {
  const color = useSelector((state) => state.colors);
  const [currentColor, setCurrentColor] = useState(color);
  useEffect(() => {
    setCurrentColor(color);
    return () => {};
  }, [color]);
  return currentColor;
}

export default useColor;
