import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  useNavigate } from "react-router-dom";

import "../css/AppCard.css";

export default function AppCard({ name, img, type, id, pokemon }) {
  const navigate=useNavigate()

  
  return (
    <>
      <Card>
        <div onClick={()=>  navigate( `/detail/${id}`)}>
          <CardMedia
            component="img"
            image={pokemon ? pokemon.sprites.other.home.front_default : img}
            alt={name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              #{pokemon ? pokemon.id : id}-{pokemon ? pokemon.name : name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Typo:{pokemon ? pokemon.types[0].type.name : type}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
