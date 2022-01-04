import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getApi } from "../redux-saga/actions/action";


import "../css/AppDetailPokemon.css";
import { RenderDetailPokemon } from "./RenderDetailPokemon";


export const AppDetailPokemon = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const state = useSelector((state) => state.reducerApi.posts[0]?.pokemons);
  const paramsPokemon = state?.find((poke) =>  poke.id === Number(params.id));
  const type = paramsPokemon?.types[0].type.name;
  

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);


 
  return (

   <RenderDetailPokemon  paramsPokemon={paramsPokemon} state={state} type={type} />
  );
};
