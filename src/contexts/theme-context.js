import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000',
        background: '#eee'
    },
    dark: {
        color: '#ffffff',
        background: '#110b11'
    } 
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

