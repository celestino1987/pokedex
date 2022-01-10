import React from "react";
import { Link } from "react-router-dom";
import { AdvanceBar } from "./AdvanceBar";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import AppSpinner from "./AppSpinner";
import { backGroundPokemon } from "./FunctionColorPokemon";

export const RenderDetailPokemon = ({
  paramsPokemon,
  state,
  pokemon,
  type,
}) => {
  return (
    <>
      {!state ? (
        <AppSpinner />
      ) : (
        <div className="box-poke-detail">
          <header >
            <Link to="/">
              {" "}
              <span>
                {" "}
                <ArrowBackSharpIcon />{" "}
              </span>{" "}
            </Link>
            
          </header>
          
          <div className=" box-order-details">
            <div className="details">
            <h5> Name:{" "} <span> {paramsPokemon?.name}</span></h5>
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
                  {paramsPokemon.abilities[0].ability.name}-
                  {paramsPokemon.abilities[1]?.ability.name}
                </span>
              </h5>
              <h5>
                {" "}
                Type:
                <span >
                  {paramsPokemon?.types[0].type.name}{" "}
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
