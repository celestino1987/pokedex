import { InsertDriveFileOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux-saga/actions/action";

import { getType } from "../redux-saga/actions/actionTypeEs";

import { BtnGalery } from "./BtnGalery";

import { RenderGalery } from "./RenderGalery";

export const AppGaleryPokemons = ({ pokemon, searchPokemon }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const [isDisabledBtnNext, setIsDisabledBtnNext] = useState(false);
  const [page, setPage] = useState(0);
  const [pokeType, setPokeType] = useState();
  const state = useSelector((state) => state.reducerApi.posts?.pokemons);
  const typeEs = useSelector((state) => state?.reducerTypeEs?.tipos);
  const language = useSelector((state) => state.reducerLanguage);
 
  const dispatch = useDispatch();

  let poke = state?.find(
    (poke) =>
      poke.name === pokemon?.toLowerCase() ||
      (poke.id === Number(pokemon) && poke)
  );
  const lista = state?.filter((list) =>
    page === 0
      ? list.id <= 11
      : page >= 1
      ? list.id > [page] + 1 && list.id < [page + 1] + 2
      : ""
  );

  const list = pokeType ? pokeType : lista?.sort((a, b) => a.id - b.id);

  const searchType = (value) => {
    if (value === undefined)
      return setPokeType((prevPoke) => (prevPoke = false));

    const chanheName = typeEs
      .map((e) => e[0])
      .find((r) => r?.toLowerCase() === value);

    const filterIncludeName = typeEs.filter((e) => e.includes(chanheName));
    const getpositionName = filterIncludeName.map((names) => names[1]);
    let [nameTrasform] = getpositionName;

    setPokeType(
      state?.filter((poke) =>
      chanheName
          ? poke.types[0].type.name === nameTrasform.toLowerCase()
          : poke.types[0].type.name === value
      )
    );


  };

  const changePage = (ini = false) => {
    ini
      ? setPage((prevPage) => prevPage + 1)
      : setPage((prevPage) => prevPage - 1);
  };
  const backPokemons = () => {
    setPokeType((prevPoke) => (prevPoke = false));
  };

  useEffect(() => {
    page === 0
      ? setIsDisabled(true)
      : list?.length <= 9
      ? setIsDisabledBtnNext(true)
      : setIsDisabled(false) || setIsDisabledBtnNext(false);
    pokeType && setIsDisabled(true) && setIsDisabledBtnNext(true);
  }, [page, list]);
  useEffect(() => {
    dispatch(getApi());
    dispatch(getType());
  }, [dispatch]);

  return (
    <>
      <BtnGalery
        changePage={changePage}
        isDisabled={isDisabled}
        isDisabledBtnNext={isDisabledBtnNext}
        page={page + 1}
        poke={poke}
        searchPokemon={searchPokemon}
        searchType={searchType}
        pokeType={pokeType}
        backPokemons={backPokemons}
        language={language}
      />

      <RenderGalery list={list} pokemon={pokemon} poke={poke} />
    </>
  );
};
