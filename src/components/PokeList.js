import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const pokemonItems = this.props.list.map((pokemonItem) => {
      return (
        <li key={pokemonItem.id}>
          <Pokemon pokemonItem={pokemonItem} />
        </li>
      );
    });
    return (
      <div className="pokemon__wrapper">
        Mi lista de Pokemon:
        <ul className="pokemon__list">{pokemonItems}</ul>
      </div>
    );
  }
}

export default PokeList;
