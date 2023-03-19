import { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

function ThemeProvider({initialTheme, children}) {
    const {theme, setTheme} = useTheme(initialTheme);

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };