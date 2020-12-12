import React from "react";
import pokeball from "../images/pokeball.png";

const PokeFavourites = (props) => {
  return (
    <div className="favourites">
      {/* <div className="favourites__inner"> */}
      <img
        className="favourites__pokeball"
        src={pokeball}
        alt="Pokeball"
        title="Pokeball"
      />
      <h2 className="favourites__title">
        Has añadido {props.favourites.length} Pokemons a tu Pokedex
      </h2>
      {/* </div> */}
      <button className="favourites__reset" onClick={props.handleClick}>
        Vaciar
      </button>
    </div>
  );
};
export default PokeFavourites;
