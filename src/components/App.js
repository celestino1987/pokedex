import "../App.css";
import { useHookSearch } from "../hooks/useHookSearch";
import { AppGaleryPokemons } from "./AppGaleryPokemons";
import { AppHeader } from "./AppHeader";

function App() {
  const [pokemon, searchPokemon] = useHookSearch();

  return (
    <>
      <AppHeader searchPokemon={searchPokemon} />

      <AppGaleryPokemons pokemon={pokemon}  searchPokemon={searchPokemon} />
    </>
  );
}

export default App;
