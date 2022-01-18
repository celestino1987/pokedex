import {types} from "../types/types"

const ini={
    tipos:[]
}
export const reducerTypeEs =(state=ini ,action)=>{
    
    switch(action.type){

        case types.GET_TYPE_SP:
            return {...state}
        case types.GET_TYPE_SP_SET:
            return {...state, tipos:action.payload.types}
            default:
                return state
    }


}