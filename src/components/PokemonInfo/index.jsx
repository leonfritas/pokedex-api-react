import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonInfo = () => {
  let { name } = useParams();

  const getPokemonInfo = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.json();
  };
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonInfo(name);
      setPokemon(data);
    };
    fetchData();
  }, []);

  

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites?.front_default}/>

      {pokemon.abilities?.map((ability, index) => {
        return <li key={index}>{ability.ability.name}</li>;
      })}
    </div>
  );
};

export { PokemonInfo };
