/* eslint-disable no-unused-expressions */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux-saga/actions/action";

import { BtnGalery } from "./BtnGalery";

import { RenderGalery } from "./RenderGalery";

export const AppGaleryPokemons = ({ pokemon, searchPokemon }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledBtnNext, setIsDisabledBtnNext] = useState(false);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducerApi.posts[0]?.pokemons);

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
  const list = lista?.sort((a, b) => a.id - b.id);

  const changePage = (ini = false) => {
    ini
      ? setPage((prevPage) => prevPage + 1)
      : setPage((prevPage) => prevPage - 1);

    
  };

  useEffect(() => {
    page === 0
      ? setIsDisabled(true)
      : list?.length <= 9
      ? setIsDisabledBtnNext(true)
      : setIsDisabled(false) || setIsDisabledBtnNext(false);
  }, [page, list]);
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <>
      <BtnGalery
        changePage={changePage}
        isDisabled={isDisabled}
        isDisabledBtnNext={isDisabledBtnNext}
        page={page}
        poke={poke}
        searchPokemon={searchPokemon}
      />

      <RenderGalery list={list} pokemon={pokemon} poke={poke} />
    </>
  );
};
