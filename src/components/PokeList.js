import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../stylesheets/_PokeList.scss";

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
      <>
        <h1 className="pokemon__title">Mi lista de pokemon</h1>
        <ul className="pokemon__list">{pokemonItems}</ul>
      </>
    );
  }
}

PokeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default PokeList;
