import { types } from "../types/types";
const ini ={
    valor:Boolean,
    defaultBool:false
  }
  
  export const reducerLanguage = (state = ini.defaultBool,action)=>{
   
    switch(action.type){
      case types.LANGUAGE_ES_EN_SET:
      return ini.valor = action.payload
      default:
      return state
      
}

}
