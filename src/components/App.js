import React from "react";
import PokeList from "./PokeList";
import pokemons from "./data/pokemons.json";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: pokemons,
    };
  }

  render() {
    return (
      <div className="page">
        <PokeList list={this.state.pokedex} />
      </div>
    );
  }
}

export default App;
