import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { Button } from "../Button/Button";
import "./style.css";
import pokeball from "../../images/pokeball.png";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Button className="btn">
        <p>Day Mode</p>
        <input
          className="input"
          onClick={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
          }
          type="checkbox"
          id="check"
        />
        <label htmlFor="check">
          <span className="select">
            <img className="pokeball" src={pokeball} alt="pokeball"></img>
          </span>
        </label>
        <p>Night Mode</p>
      </Button>
    </div>
  );
};
