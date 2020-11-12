import React from "react";

const Pokemon = (props) => {
  const pokemon = props.pokemonItem.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <div className="pokemon__card">
      <img
        src={props.pokemonItem.url}
        alt={`Imagen Pokemon: ${props.pokemonItem.name} `}
      />
      <h2>{props.pokemonItem.name}</h2>
      <ul className="pokemon__types">{pokemon}</ul>
    </div>
  );
};

export default Pokemon;
