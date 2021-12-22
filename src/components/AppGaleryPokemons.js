
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux-saga/actions/action";

import { BtnGalery } from "./BtnGalery";

import { RenderGalery } from "./RenderGalery";

export const AppGaleryPokemons = ({ pokemon }) => {
  const [isDisabled,setIsDisabled]=useState(false)
  const [page, setPage] = useState(1);
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducerApi.posts[0]?.pokemons);
  const list = state?.filter((list) =>
    page === 1
      ? list.id <= 10
      : page >= 1
      ? list.id > [page] + 0 && list.id <= [page + 1] + 0
      : ""
  );
  const changePage = (ini = false) => {
    ini
      ? setPage((prevPage) => prevPage + 1)
      : setPage((prevPage) => prevPage - 1);
  };
useEffect(()=>{
  page=== 1 ? setIsDisabled(true):
  setIsDisabled(false)
},[page])
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <>
      <BtnGalery changePage={changePage} isDisabled={isDisabled}  page={page}/>

      <RenderGalery list={list} pokemon={pokemon} />
    </>
  );
};
