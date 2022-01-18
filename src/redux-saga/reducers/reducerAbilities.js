import {types} from "../types/types"

const ini={
    habilidades:[]
}
export const reducerAbilities =(state=ini ,action)=>{
    
    switch(action.type){

        case types.LAN_ABILITIES_ES_EN:
            return {...state}
        case types.LAN_ABILITIES_ES_EN_SET:
            return {...state, habilidades:action.payload}
            default:
                return state
    }


}