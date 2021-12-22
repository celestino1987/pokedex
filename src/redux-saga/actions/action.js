import {types} from '../types/types'


export const getApi=()=>({
    

        type:types.GET_API,
        
    
})


export const getApiSet= (posts)=>({
   

        type:types.GET_API_SET,
        payload:posts
    

})