import { Button } from "@mui/material";
import React from "react";
import "../css/BtnGalery.css";

export const BtnGalery = ({ changePage, isDisabled, page }) => {
  return (
    <>
      <div className="box-pagination">
        <Button
          onClick={() => changePage(false)}
          disabled={isDisabled}
          className="btn"
        >
          Atras{" "}
        </Button>
        <div className="pagination">
          {" "}
          <span className="margin">
            {" "}
            {page > 2 && ". . ."} {page === 1 ? "" : page - 1}{" "}
          </span>{" "}
          <span className="page-actual">{page} </span>{" "}
          <span className="margin">{page + 1} </span> . . .
        </div>
        <Button onClick={() => changePage(true)} className="btn">
          {" "}
          delante
        </Button>
      </div>
    </>
  );
};
