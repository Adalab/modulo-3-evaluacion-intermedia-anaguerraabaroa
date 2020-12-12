import React, { useState } from "react";
import pokemons from "./data/pokemons.json";
import Header from "./Header";
import PokeFavourites from "./PokeFavourites";
import PokeList from "./PokeList";
import Footer from "./Footer";
import "../stylesheets/App.scss";

function App() {
  //state: set function is not needed in this app
  const [pokedex] = useState(pokemons);
  const [favourites, setFavourites] = useState([]);

  //event handle favourites
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

  // event handle reset
  const handleClick = () => {
    setFavourites([]);
  };

  return (
    <div className="page">
      <Header />
      <main className="main" role="main">
        <PokeFavourites favourites={favourites} handleClick={handleClick} />
        <PokeList
          list={pokedex}
          handleFavourites={handleFavourites}
          favourites={favourites}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
