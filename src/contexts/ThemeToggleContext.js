import React, { createContext, useReducer } from 'react';
import {ThemeToggleReducer} from "../reducers/ThemeToggleReducer";
export const ThemeToggleContext = createContext();
function ThemeContextToggleProvider({children}) {
    const [toggle,dispatch] = useReducer(ThemeToggleReducer, false)
    const ThemeToggleContextData = {
        toggle,
        dispatchToggle:dispatch
    }
    return (
        <ThemeToggleContext.Provider value={ThemeToggleContextData}>
            {children}
        </ThemeToggleContext.Provider>
    );
}

export default ThemeContextToggleProvider;