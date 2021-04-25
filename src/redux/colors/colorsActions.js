import { DARK_MODE, LIGHT_MODE } from "./colorsTypes";

export const darkMode=()=>{
    return{
        type: DARK_MODE,        
    }
}
export const lightMode=()=>{
    return{
        type: LIGHT_MODE,        
    }
}