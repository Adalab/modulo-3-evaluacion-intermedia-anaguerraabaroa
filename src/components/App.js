import React, { useState } from "react";
import Header from "./Header";
import PokeList from "./PokeList";
import pokemons from "./data/pokemons.json";
import "../stylesheets/App.scss";

function App() {
  //state: set function is not needed in this app
  const [pokedex] = useState(pokemons);
  const [favourites, setFavourites] = useState([]);

  //event
  const handleFavourites = (clickedPokemon) => {
    if (!favourites.includes(clickedPokemon)) {
      const newFavourites = [...favourites, clickedPokemon];
      setFavourites(newFavourites);
    } else {
      const newFavourites = favourites.filter((favourite) => {
        return favourite !== clickedPokemon;
      });
      setFavourites(newFavourites);
    }
  };

  return (
    <div className="page">
      <Header />
      <PokeList
        list={pokedex}
        handleFavourites={handleFavourites}
        favourites={favourites}
      />
    </div>
  );
}

export default App;
