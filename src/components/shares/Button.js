import React, {useContext} from 'react';
import {DARK_THEME, LIGHT_THEME, TOGGLE_THEME} from "../../reducers/ActionTypes";
import {ThemeToggleContext} from "../../contexts/ThemeToggleContext";
import {ThemeSwitchContext} from "../../contexts/ThemeSwitchContext";

function Button(props) {
    const { toggle, dispatchToggle } = useContext(ThemeToggleContext);
    const { theme, switchDispatch } = useContext(ThemeSwitchContext);
    const handleToggleTheme = () => {
        dispatchToggle({
            type: TOGGLE_THEME,
            payload: null
        })
    };
    const handleSwitchTheme = mode => {
        let type = mode === 'dark' ? DARK_THEME : LIGHT_THEME;
        switchDispatch({
            type: type,
            payload: mode
        });
    };
    return (
        <div className={"custom-position" + (toggle === true ? " active":'')}>
            <div className="wrap-control">
                <button className="btn btn-outline-info" onClick={handleToggleTheme} ><i className="fas fa-cog"></i></button>
                <div className="box-control">
                    <button onClick={() => handleSwitchTheme('dark')} className={"btn btn-outline-primary mb-2" + (theme === 'dark' ? ' bg-primary text-white' : '')}><i className="fas fa-moon"></i></button>
                    <button onClick={() => handleSwitchTheme('light')} className={"btn btn-outline-danger" + (theme === 'light' ? ' bg-danger text-white' : '')}><i className="far fa-moon"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Button;