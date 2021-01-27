import {TOGGLE_THEME} from "./ActionTypes";

export const ThemeToggleReducer = (state, {type, payload}) => {
    switch (type) {
        case TOGGLE_THEME:
            return !state;
        default:
            return state;
    }
};
