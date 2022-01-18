import React, { useState } from "react";
import pokeapi from "../img/pokeapi.png";
import { AppSearch } from "./AppSearch";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {changeLanguageSet} from '../redux-saga/actions/actionLanguage'
import en from '../img/en.jpg'
import es from '../img/es.jpg';
import "../css/AppHeader.css";

export function AppHeader  ({ searchPokemon })  {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.reducerLanguage);
  const[isLogoEs,setIsLogoEs]=useState(language)
  const[isLogoEn,setIsLogoEn]=useState(!language)
const handleChangleLenguage =()=>{
dispatch(changeLanguageSet(true))
setIsLogoEs(true)
setIsLogoEn(false)
}
const handleChangleLenguagEn =()=>{
  dispatch(changeLanguageSet(false))
  setIsLogoEn(true)
  setIsLogoEs(false)
  
  }

  return (
    <>
        <div> 
          <Button onClick={handleChangleLenguagEn}><img className={isLogoEn ?"logo-change":"logo-img" }src={en} alt="Ingles"/></Button>
          <Button onClick={handleChangleLenguage}><img className={isLogoEs ?"logo-change":"logo-img"} src={es} alt="Español"/></Button>
        </div>
      <div className="header">
        <img src={pokeapi} alt="img" />

        <AppSearch searchPokemon={searchPokemon} language={language} />
      </div>
    </>
  );
};
