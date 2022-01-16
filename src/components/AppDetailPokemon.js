import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getApi } from "../redux-saga/actions/action";

import "../css/AppDetailPokemon.css";
import { RenderDetailPokemon } from "./RenderDetailPokemon";
import { getType } from "../redux-saga/actions/actionTypeEs";
import { changeLanguageSet } from "../redux-saga/actions/actionLanguage";

export const AppDetailPokemon = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const state = useSelector((state) => state.reducerApi.posts?.pokemons);

  const typeEs = useSelector((state) => state?.reducerTypeEs?.tipos);
  const language = useSelector((state) => state.reducerLanguage);
  const paramsPokemon = state?.find((poke) => poke.id === Number(params.id));
  const type = paramsPokemon?.types[0].type.name;

  const nameEn = typeEs.map((e)=> e[1]).find((r)=>r?.toLowerCase() === type )
    const namesEsEn= typeEs.find((e)=>e.includes(nameEn))?.find((n)=> language=== false ? n.includes(nameEn):Object.keys(n)[0])
    


  console.log(namesEsEn);

  const handleChangeEs = () => {
    dispatch(changeLanguageSet(true));
  };
  const handleChangeEn = () => {
    dispatch(changeLanguageSet(false));
  };

  useEffect(() => {
    dispatch(getApi());
    dispatch(getType());
  }, [dispatch]);

  return (
    <RenderDetailPokemon
      paramsPokemon={paramsPokemon}
      state={state}
      type={type}
      typeEs={typeEs}
      handleChangeEn={handleChangeEn}
      handleChangeEs={handleChangeEs}
      language={language}
      namesEsEn={namesEsEn}
    />
  );
};
