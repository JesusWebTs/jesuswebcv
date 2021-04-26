import { LIGHT_MODE, DARK_MODE } from "./colorsTypes";
import { colors } from "../../styles";

const initialState = colors.lightColors;

export default function colorsReducer(state = initialState, action) {
  switch (action.type) {
    case LIGHT_MODE:
      return { ...state, ...colors.lightColors };
    case DARK_MODE:
      return { ...state, ...colors.darkColors };
    default:
      return state;
  }
}
