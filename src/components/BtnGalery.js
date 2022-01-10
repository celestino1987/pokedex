import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import "../css/BtnGalery.css";
import { ComponentButtonSelect } from "./ComponentButtonSelect";

export const BtnGalery = ({
  changePage,
  isDisabled,
  isDisabledBtnNext,
  page,
  poke,
  searchPokemon,
  searchType,
  pokeType,
  backPokemons,
}) => {
  return (
    <>
      {!poke ? (
        <div className="flex-space">
          <div className="btn-type">
            <ComponentButtonSelect searchType={searchType} />
          </div>
          <div className="box-pagination">
            <Button
              onClick={() => changePage(false)}
              disabled={isDisabled}
              className="btn"
            >
              <ArrowBackIosSharpIcon />
            </Button>
            {pokeType ? (
              <Button onClick={backPokemons}>All Pokemons</Button>
            ) : (
              <div className="pagination">
                {" "}
                <span className="margin">
                  {" "}
                  {page > 1 && ". . ."} {page === 0 ? "" : page - 1}{" "}
                </span>{" "}
                <span className="page-actual">{page} </span>{" "}
                <span className="margin">
                  {isDisabledBtnNext ? null : page + 1 + ". . ."}{" "}
                </span>
              </div>
            )}
            <Button
              onClick={() => changePage(true)}
              className="btn"
              disabled={isDisabledBtnNext}
            >
              {" "}
              <ArrowForwardIosSharpIcon />
            </Button>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="back-pokemon">
          <Button color="primary" onClick={() => searchPokemon(" ")}>
            {" "}
            <ArrowBackIosSharpIcon /> pokemons{" "}
          </Button>
        </div>
      )}
    </>
  );
};
