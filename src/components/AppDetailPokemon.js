import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getApi } from "../redux-saga/actions/action";
import { RenderDetailPokemon } from "./RenderDetailPokemon";
import { getType } from "../redux-saga/actions/actionTypeEs";
import { getAbi } from "../redux-saga/actions/actionAbilitesEs";
import "../css/AppDetailPokemon.css";

export const AppDetailPokemon = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const state = useSelector((state) => state.reducerApi.posts?.pokemons);

  const typeEs = useSelector((state) => state?.reducerTypeEs?.tipos);
  const abiEs = useSelector((state)=>state.reducerAbilities.habilidades.abilities)
  const language = useSelector((state) => state.reducerLanguage);
  const paramsPokemon = state?.find((poke) => poke.id === Number(params.id));


  useEffect(() => {
    dispatch(getAbi())
    dispatch(getApi());
    dispatch(getType());
  }, [dispatch]);

  return (
    <RenderDetailPokemon
      paramsPokemon={paramsPokemon}
      state={state}  
      typeEs={typeEs}     
      language={language}
      abiEs={abiEs}
    />
  );
};
