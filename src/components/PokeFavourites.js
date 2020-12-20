import React from "react";
import pokeball from "../images/pokeball.png";

const PokeFavourites = (props) => {
  return (
    <div className="favourites">
      <img
        className="favourites__pokeball"
        src={pokeball}
        alt="Pokeball"
        title="Pokeball"
      />
      <h2 className="favourites__title">
        Has añadido {props.favourites.length} Pokemon a tu Pokedex
      </h2>
      <button className="favourites__reset" onClick={props.handleClick}>
        Vaciar
      </button>
    </div>
  );
};
export default PokeFavourites;
