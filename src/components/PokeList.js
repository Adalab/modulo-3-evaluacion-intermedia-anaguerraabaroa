import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  //console.log(props.pokemons);
  const pokemonList = this.props.pokemons.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id}>
        <Pokemon
          url={pokemonItem.url}
          name={pokemonItem.name}
          types={pokemonItem.types}
        />
      </li>
    );
  });

  return (
    <div>
      <ul className="pokemons__wrapper">{pokemonList}</ul>
    </div>
  );
};

export default PokeList;
