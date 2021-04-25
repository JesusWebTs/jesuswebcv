import { combineReducers } from "redux";
import colorsReducer from "./colors/colorsReducer";

const rootReducer = combineReducers({
  colors: colorsReducer,
});
export default rootReducer;
