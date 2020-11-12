import React from "react";
import "../stylesheets/_Pokemon.scss";

const Pokemon = (props) => {
  const pokemon = props.pokemonItem.types.map((type, index) => {
    return (
      <li className="type" key={index}>
        {type}
      </li>
    );
  });

  return (
    <div className="pokemon__card">
      <img
        className="pokemon__image"
        src={props.pokemonItem.url}
        alt={`Imagen Pokemon: ${props.pokemonItem.name} `}
      />
      <h2 className="pokemon__name">{props.pokemonItem.name}</h2>
      <ul className="pokemon__types">{pokemon}</ul>
    </div>
  );
};

export default Pokemon;
