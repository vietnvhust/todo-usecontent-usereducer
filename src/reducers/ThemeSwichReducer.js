import {DARK_THEME, LIGHT_THEME} from "./ActionTypes";

export const ThemeSwichReducer = (state, {type, payload}) => {
    switch (type) {
        case DARK_THEME:
            return 'dark';
        case LIGHT_THEME:
            return 'light';
        default:
            return state;
    }
};