import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pokemon } from "./pokemon";
import { Pokemons } from "./pokemons";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Pokemons />}/>
        <Route path='/:name' element={<Pokemon />}/>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes }
