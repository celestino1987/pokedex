import React, { useState } from "react";


export const AppSearch = ({searchPokemon,language}) => {
  
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
            placeholder={  language ? "   Buscar pokemon . . .":"   Search pokemon . . ."}
          />
        </form>
      </div>
    </>
  );
};
