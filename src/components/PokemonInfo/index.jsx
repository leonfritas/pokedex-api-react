import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getPokemonInfo } from "../../services/pokeapi";
import { ThemeContext } from "../../contexts/theme-context";
import { Header } from "../Header/Header";

const PokemonInfo = () => {
  let { name } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonInfo(name);
      setPokemon(data);
    };
    fetchData();
  }, [name]);

  const { theme } = useContext(ThemeContext);

  return (
    <main style={{ backgroundColor: theme.background, color: theme.color }}>
      <Header />
      <Section
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <DivContainer
          style={{ backgroundColor: theme.background, color: theme.color }}
        >
          <DivName>
            <H3>{pokemon.name?.[0].toUpperCase() + pokemon.name?.slice(1)}</H3>
          </DivName>
          <DivLeft>
            <Link to="/">
              <Button>Voltar</Button>
            </Link>
            <DivAbilities>
              <H4>Abilities</H4>
              <ul>
                {pokemon.abilities?.map((ability, index) => {
                  return (
                    <Li key={index}>
                      <p>
                        {ability.ability.name?.[0].toUpperCase() +
                          ability.ability.name?.slice(1)}
                      </p>
                    </Li>
                  );
                })}
              </ul>
            </DivAbilities>
            <DivMoves>
              <H4>Moves</H4>
              {pokemon.moves?.slice(0, 3).map((move, index) => {
                return (
                  <Li key={index}>
                    {move.move.name?.[0].toUpperCase() +
                      move.move.name?.slice(1)}
                  </Li>
                );
              })}
            </DivMoves>
          </DivLeft>
          <DivPokemon>
            <Img
              src={pokemon.sprites?.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <H4>Type</H4>
            <DivTypes>
              {pokemon.types?.map((type, index) => {
                return (
                  <Li key={index}>
                    {type.type.name?.[0].toUpperCase() +
                      type.type.name?.slice(1)}
                  </Li>
                );
              })}
            </DivTypes>
          </DivPokemon>
          <DivRight>
            <DivStats>
              <H4>Stats</H4>
              {pokemon.stats?.map((stat, index) => {
                return (
                  <DivStat>
                    <Li key={index}>
                      {stat.stat.name?.[0].toUpperCase() +
                        stat.stat.name?.slice(1)}
                    </Li>
                    <Li key={pokemon.id}>{stat.base_stat}</Li>
                  </DivStat>
                );
              })}
            </DivStats>
          </DivRight>
        </DivContainer>
      </Section>
    </main>
  );
};

const DivName = styled.div`
position: absolute;
top:5px;
@media(max-widht: 500px){
position: absolute;
top: 5px;
}
`

const DivAbilities = styled.div`
  text-align: center;
`;

const DivMoves = styled.div`
  text-align: center;
`;

const DivRight = styled.div`
  width: 160px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const DivStat = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DivStats = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Li = styled.li`
  margin: 3px;
`;

const H4 = styled.h4`
  font-size: 22px;
  border-bottom: 4px solid #6495ed;
  text-align: center;
`;

const DivTypes = styled.div`
  display: flex;
  gap: 10px;
`;

const DivPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  @media(max-width: 500px){
    
  }
`;

const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  height: 300px;
`;

const Button = styled.button`
  position: absolute;
  bottom: -35px;
  left: 0;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #baba12;
  cursor: pointer;
  font-weight: 600;
`;

const H3 = styled.h3`
  font-size: 40px;
  @media (max-width: 500px) {
  }
`;

const Img = styled.img`
  width: 300px;
  @media (max-width: 500px) {
    width: 250px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

const DivContainer = styled.div`
  border-radius: 20px;
  display: flex;
  gap: 20px;
  position: relative;
  align-items: center;
  background-color: #eee;
  padding: 20px;
  box-shadow: 1px 3px 10px 0.5px #000;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export { PokemonInfo };
