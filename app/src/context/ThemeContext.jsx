// JavaScript source code
import React, { createContext, useState } from "react";

const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState({
        value: "light",
        browser: "firefox",
    });
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={setTheme}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
}