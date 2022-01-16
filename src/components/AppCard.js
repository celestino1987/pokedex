import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { backGroundPokemon } from "./FunctionColorPokemon";

import "../css/AppCard.css";
import { capitalizarPrimeraLetra } from "./FunctionCapitalize";


export default function AppCard({ ...props }) {
  const { name, img, type, id, searchId, searchName, searchType, searchImg } =
    props;
   
   

  const navigate = useNavigate();

  return (
    <>
      <Card>
        <div onClick={() => navigate(`/detail/${searchId ? searchId : id}`)}>
          <CardMedia
            component="img"
            alt={name}
            image={searchImg ? searchImg : img}
          />

          <div className={backGroundPokemon(type, searchType)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <span className="color">
                  #{searchId ? searchId : id}-{searchName ? capitalizarPrimeraLetra(searchName) : capitalizarPrimeraLetra(name)}
                </span>
              </Typography>

              <Typography variant="body2">
                <span className="color">
                  Type:{searchType ? searchType : type}
                </span>
              </Typography>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  );
}
