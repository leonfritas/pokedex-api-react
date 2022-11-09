import { AppRoutes } from "./pages/routes";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family:  Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}`;

export default App;
