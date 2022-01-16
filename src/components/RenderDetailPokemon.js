import React from "react";
import { Link } from "react-router-dom";
import { AdvanceBar } from "./AdvanceBar";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import AppSpinner from "./AppSpinner";
import { capitalizarPrimeraLetra } from "./FunctionCapitalize";
import { Button } from "@material-ui/core";



export const RenderDetailPokemon = ({
  paramsPokemon,
  state,
  pokemon,
  type,
  handleChangeEn,
  handleChangeEs,
  language,
  namesEsEn
}) => {
 
  return (
    <>
      {!state ? (
        <AppSpinner />
      ) : (
        <div className="box-poke-detail">
          <header >
            <Button onClick={handleChangeEs}>Es</Button>
            <Link to="/">
              {" "}
              <span>
                {" "}
                <ArrowBackSharpIcon />{" "}
              </span>{" "}
            </Link>
            <Button onClick={handleChangeEn}>En</Button>
          </header>
          
          <div className=" box-order-details">
            <div className="details">
            <h5> Name:{" "} <span> {capitalizarPrimeraLetra(paramsPokemon?.name)}</span></h5>
              <h5>
                {" "}
                ID:{" "}
                <span >
                  {pokemon ? pokemon.id : paramsPokemon.id}
                </span>
              </h5>
              <h5>
                {" "}
                Height:
                <span >
                  {paramsPokemon.height}
                </span>
              </h5>
              <h5>
                {" "}
                Weight :{" "}
                <span >
                  {paramsPokemon.weight}
                </span>
              </h5>
              <h5>
                {" "}
                Abilities:
                <span >
                  {paramsPokemon.abilities[0].ability.name}{" "}
                  {paramsPokemon.abilities[1]?.ability.name}
                </span>
              </h5>
              <h5>
                {" "}
                Type:
                <span >
                  {namesEsEn}{" "}
                  {paramsPokemon.types[1]?.type.name}
                </span>
              </h5>
            </div>
            <div className="box-img">
              <img
                src={paramsPokemon?.sprites.other.home.front_default}
                alt={paramsPokemon?.name}
              />
            </div>
            <div className="stats-fondo">
            <div className="stats">
              <h5>Base Stats</h5>
              <h5>
                {" "}
                HP :
                <AdvanceBar
                  done={paramsPokemon.stats[0].base_stat}
                  type={type}
                />
              </h5>

              <h5>
                {" "}
                Attack :
                <AdvanceBar
                  done={paramsPokemon.stats[1].base_stat}
                  type={type}
                />
              </h5>
              <h5>
                {" "}
                Defense :{" "}
                <AdvanceBar
                  done={paramsPokemon.stats[2].base_stat}
                  type={type}
                />
              </h5>
              <h5>
                {" "}
                Sp.Attack:{" "}
                <AdvanceBar
                  done={paramsPokemon.stats[3].base_stat}
                  type={type}
                  />
              </h5>
              <h5>
                {" "}
                Sp.Defence :
                <AdvanceBar
                  done={paramsPokemon.stats[4].base_stat}
                  type={type}
                  />
              </h5>
              <h5>
                {" "}
                Speed :
                <AdvanceBar
                  done={paramsPokemon.stats[5].base_stat}
                  type={type}
                  />
              </h5>
            </div>
          </div>
        </div>
                  </div>
      )}
    </>
  );
};
