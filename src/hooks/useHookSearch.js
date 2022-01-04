import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getApi } from "../redux-saga/actions/action";

export const useHookSearch = () => {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducerApi.posts[0]?.pokemons);

  const searchPokemon = (query) => {
    if (query === "") {
      return state;
    }

    setPokemon(query);
  };
 
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  useEffect(() => {
    searchPokemon();
  }, []);

  return [pokemon, searchPokemon];
};
