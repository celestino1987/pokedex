import React, { useState } from "react";


export const AppSearch = ({searchPokemon}) => {
  
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
 
    searchPokemon(search)
    
    
  };
  return (
    <>
      <div className="box-input">
        <form onSubmit={handleSearch}>
          <input
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="   Buscar pokemon . . ."
          />
        </form>
      </div>
    </>
  );
};
