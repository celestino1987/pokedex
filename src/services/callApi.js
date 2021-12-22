import axios from 'axios'

export const  getAxios  =  () =>{

    return axios.get(` https://pokeapi.co/api/v2/pokemon?limit=150` )
}





export const axiosPokemon= async(query)=> {
 

  const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
  return res
     



}