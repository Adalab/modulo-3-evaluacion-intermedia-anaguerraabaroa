import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../stylesheets/_PokeList.scss";

const PokeList = (props) => {
  // event
  const handleFavourites = (ev) => {
    const clickedPokemon = parseInt(ev.currentTarget.id);
    props.handleFavourites(clickedPokemon);
  };

  //render
  const pokemonItems = props.list.map((pokemonItem) => {
    return (
      <li
        key={pokemonItem.id}
        id={pokemonItem.id}
        onClick={handleFavourites}
        className={
          props.favourites.includes(parseInt(pokemonItem.id))
            ? "pokemon_favourite"
            : ""
        }
      >
        <Pokemon pokemonItem={pokemonItem} />
      </li>
    );
  });
  return (
    <>
      <ul className="pokemon__list">{pokemonItems}</ul>
    </>
  );
};

PokeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default PokeList;
