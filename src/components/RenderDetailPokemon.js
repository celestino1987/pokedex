import React from "react";
import { Link } from "react-router-dom";
import { AdvanceBar } from "./AdvanceBar";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import AppSpinner from "./AppSpinner";
import { capitalizarPrimeraLetra } from "./FunctionCapitalize";
import { transformAbilities, transformlanguege } from "./functiontransform";

export const RenderDetailPokemon = ({ ...props }) => {
  const {
    paramsPokemon,
    state,
    pokemon,
    language,
    typeEs,
    abiEs,
  } = props;
 
  return (
    <>
      {!state ? (
        <AppSpinner />
      ) : (
        <div className="box-poke-detail">
          <header>
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
              <h5>
                {" "}
                {language ? "Nombre" : "Name"} :{" "}
                <span> {capitalizarPrimeraLetra(paramsPokemon?.name)}</span>
              </h5>
              <h5>
                {" "}
                ID: <span>{pokemon ? pokemon.id : paramsPokemon.id}</span>
              </h5>
              <h5>
                {" "}
                {language ? "Alto" : "Height"}:
                <span>{paramsPokemon.height}</span>
              </h5>
              <h5>
                {" "}
                {language ? "Ancho" : "Weight"} :{" "}
                <span>{paramsPokemon.weight}</span>
              </h5>
              <h5>
                {" "}
                {language ? "Abilidades" : "Abilities"}:
                <span>
                  {}
                  {transformAbilities(
                    abiEs,
                    paramsPokemon?.abilities[0].ability.name,
                    language
                  )}{" "}
                  {transformAbilities(
                    abiEs,
                    paramsPokemon?.abilities[1].ability.name,
                    language
                  )}
                </span>
              </h5>
              <h5>
                {" "}
                {language ? "Tipo" : "Type"}:
                <span>
                  {transformlanguege(
                    typeEs,
                    paramsPokemon?.types[0].type.name,
                    language
                  )}{" "}
                  {transformlanguege(
                    typeEs,
                    paramsPokemon?.types[1]?.type.name,
                    language
                  )}
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
                <h5>{language ? "Estadísticas" : "Base Stats"}</h5>
                <h5>
                  {" "}
                  HP :
                  <AdvanceBar
                    done={paramsPokemon.stats[0].base_stat}
                    type={paramsPokemon?.types[0].type.name}
                  />
                </h5>

                <h5>
                  {" "}
                  {language ? "Attaque" : "Attack"} :
                  <AdvanceBar
                    done={paramsPokemon.stats[1].base_stat}
                    type={paramsPokemon?.types[0].type.name}
                  />
                </h5>
                <h5>
                  {" "}
                  {language ? "Defensa" : "Defense"} :{" "}
                  <AdvanceBar
                    done={paramsPokemon.stats[2].base_stat}
                    type={paramsPokemon?.types[0].type.name}
                  />
                </h5>
                <h5>
                  {" "}
                  {language ? "Sp.Ataque" : "Sp.Attack"}:{" "}
                  <AdvanceBar
                    done={paramsPokemon.stats[3].base_stat}
                    type={paramsPokemon?.types[0].type.name}
                  />
                </h5>
                <h5>
                  {" "}
                  {language ? "Sp.Defensa" : "Sp.Defence"} :
                  <AdvanceBar
                    done={paramsPokemon.stats[4].base_stat}
                    type={paramsPokemon?.types[0].type.name}
                  />
                </h5>
                <h5>
                  {" "}
                  {language ? "Rapidez" : "Speed"} :
                  <AdvanceBar
                    done={paramsPokemon.stats[5].base_stat}
                    type={paramsPokemon?.types[0].type.name}
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
