import React from "react";
import pokeball from "../images/pokeball.png";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  // event
  const handleFavourites = (ev) => {
    const clickedPokemon = parseInt(ev.currentTarget.id);
    props.handleFavourites(clickedPokemon);
  };

  // render
  const pokemon = props.pokemonItem.types.map((type, index) => {
    return (
      <li key={index} className="type">
        {type}
      </li>
    );
  });

  return (
    <div
      id={props.pokemonItem.id}
      className={`${"pokemon__card"} || ${
        props.favourites.includes(parseInt(props.pokemonItem.id))
          ? "pokemon__card--favourite"
          : "pokemon__card"
      }`}
      onClick={handleFavourites}
    >
      <img
        className="pokemon__image"
        src={props.pokemonItem.url}
        alt={`Pokemon: ${props.pokemonItem.name} `}
        title={`Pokemon: ${props.pokemonItem.name} `}
      />
      <div className="pokemon__stripe"></div>
      <div className="pokemon__button">
        <img
          className={`${"pokemon__ball"} || ${
            props.favourites.includes(parseInt(props.pokemonItem.id))
              ? "pokemon__ball--favourite"
              : "pokemon__ball"
          }`}
          onClick={handleFavourites}
          src={pokeball}
          title="Pokeball"
          alt="Pokeball"
        />
      </div>
      <h2 className="pokemon__name">{props.pokemonItem.name}</h2>
      <ul className="pokemon__types">{pokemon}</ul>
    </div>
  );
};

Pokemon.propTypes = {
  pokemonItem: PropTypes.object.isRequired,
};

export default Pokemon;
