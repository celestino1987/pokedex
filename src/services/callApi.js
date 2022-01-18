import { Language } from "@material-ui/icons";
import axios from "axios";
import es from "faker/lib/locales/es";

export const getAxios = async () => {
  let pokemons = [];

  const res = await axios.get(` https://pokeapi.co/api/v2/pokemon?limit=150`);
  const data = res.data.results;
  return Promise.all(
    data.map(async (pokemon) => {
      const result = await axiosPokemon(pokemon.name);

      pokemons.push(result.data);
    })
  ).then(() => {
    return { pokemons };
  });
};

export const axiosPokemon = async (query) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
  return res;
};

////////////////////////////////
// tipo  en español e ingles
export const callTypeSpn = async () => {
  const types = [];
  const res = await axios("https://pokeapi.co/api/v2/type/ ");
  const data = res.data.results;
  return Promise.all(
    data.map(async (type) => {
      const result = await callType(type.name);

      types.push(
        result.data.names
          .filter(
            (lan) => lan.language.name === "es" || lan.language.name === "en"
          )
          .map((es) => es.name)
      );
    })
  ).then(() => {
    return { types };
  });
};

const callType = async (query) => {
  const res = await axios(`https://pokeapi.co/api/v2/type/${query}`);
  return res;
};

//// llamada de las  habilidades

export const callAbilitiesEs = async () => {
  const abilities = [];

  const res = await axios(
    "https://pokeapi.co/api/v2/ability/?offset=20&limit=246"
  );
  const data = res.data.results;


  return Promise.all(
    data.map(async (abi) => {
      const result = await callAbilities(abi.name);
      const idioma = result.data.names;

      abilities.push(
        idioma
          .filter(
            (lan) => lan.language.name === "es" || lan.language.name === "en"
          )
          .map((es) => es.name)
      );
    })
  ).then(() => {
    return { abilities };
  });
};
callAbilitiesEs();

const callAbilities = async (query) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/ability/${query}`);
  return res;
};

//fetch('https://pokeapi.co/api/v2/ability/34/')
//.then(res => res.json())
//.then(data =>console.log(data.names[5].name))
//fetch('https://pokeapi.co/api/v2/ability/65/')
//.then(res => res.json())
//.then(data =>console.log(data.names[5].name))
