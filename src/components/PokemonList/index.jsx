import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const getPokemonList = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    return await response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemons([data][0].results);
    };
    fetchData();
  }, [limit]);

  const loadMorePokemons = () => {
    setLimit(limit + 10);
  };
  return (
    <main>
      <header>
        <h1>Pokedex</h1>
      </header>
      <section>
        <Ul>
          
            {pokemons.map((pokemon, index) => {
              return (
                <Li key={index}>
                   <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      alt={pokemon.name}
                    />
                  <Link to={pokemon.name}>
                    {pokemon.name}
                  </Link>
                 
                </Li>
              );
            })}
          
        </Ul>
      </section>
      <button onClick={loadMorePokemons}>
        Clique aqui para carregar mais pokemons
      </button>
    </main>
  );
};

const Li = styled.li`
display:flex;
flex-direction: column;
text-align: center;
border: 1px solid black`

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export { PokemonList };
