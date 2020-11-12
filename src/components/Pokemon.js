import React from "react";

const Pokemon = (props) => {
  const pokemonTypes = props.pokemons.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <div>
      <ul className="pokemons__types">{pokemonTypes}</ul>
    </div>
  );
};

export default Pokemon;
