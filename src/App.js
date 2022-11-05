import { AppRoutes } from "./pages/routes";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none
}`

export default App;
