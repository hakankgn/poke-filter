import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        value={value}
        type="text"
        placeholder="Search a Pokemon"
        onChange={handleChange}
      />
      <div className="cards">
        {filteredPokemons.map((pokemon) => (
          <CardItem
            name={pokemon.name}
            sprite={pokemon.sprite}
            key={pokemon.name}
          />
        ))}
      </div>
    </div>
  );
}
