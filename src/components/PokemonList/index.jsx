import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPokemonList } from "../../services/pokeapi";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Header } from "../Header/Header";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList(limit);
      setPokemons([data][0].results);
    };
    fetchData();
  });

  const loadMorePokemons = () => {
    setLimit(limit + 10);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <Main style={{ color: theme.color, backgroundColor: theme.background }}>
      <Header />
      <section>
        <Ul>
          {pokemons.map((pokemon, index) => {
            return (
              <Li style={{ backgroundColor: theme.background }} key={index}>
                <Link to={pokemon.name}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
                      index + 1
                    }.gif`}
                    alt={pokemon.name}
                  />
                  <h3 style={{ color: theme.color }}>
                    {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                  </h3>
                </Link>
              </Li>
            );
          })}
        </Ul>
        <Button onClick={loadMorePokemons}>Show more pokemons</Button>
      </section>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  align-itens: center;
  flex-direction: column;
  background-color: #eee;
  min-height: 100vh;
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-itens: center;
  justify-content: flex-end;
  border-radius: 5px;
  padding: 10px 10px 3px 10px;
  box-shadow: 1px 3px 10px 0.5px #000;
  background-color: #fff;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: translateY(5px);
  }
  min-width: 150px;
  height: 110px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 200px;
  @media(max-width: 500px){
    margin: 30px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 80px;
  margin: 30px;
  border-radius: 5px;
  border: 1px white solid;
  background-color: #1e90ff;
  color: white;
  padding: 10px;
  font-weight: 800;
  cursor: pointer;
`;

export { PokemonList };
