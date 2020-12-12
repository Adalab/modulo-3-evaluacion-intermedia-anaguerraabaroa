import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

const PokeList = (props) => {
  //render
  const pokemonItems = props.list.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id}>
        <Pokemon
          pokemonItem={pokemonItem}
          handleFavourites={props.handleFavourites}
          favourites={props.favourites}
        />
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
