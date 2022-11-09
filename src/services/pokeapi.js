const getPokemonList = async (limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  return await response.json();
};

const getPokemonInfo = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await response.json();
};

export { getPokemonList, getPokemonInfo };
