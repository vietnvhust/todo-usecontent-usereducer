import React, {createContext, useReducer} from 'react';
import {ThemeSwichReducer} from "../reducers/ThemeSwichReducer";
export const ThemeSwitchContext = createContext();
function ThemeSwitchContextProvider({children}) {
    const [theme, dispatch] = useReducer(ThemeSwichReducer, 'dark')
    const ThemeContextSwitchDate = {
        theme:theme,
        switchDispatch:dispatch
    };
    return (
        <ThemeSwitchContext.Provider value={ThemeContextSwitchDate}>
            {children}
        </ThemeSwitchContext.Provider>
    );
}

export default ThemeSwitchContextProvider;