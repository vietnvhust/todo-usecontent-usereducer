import React, {useContext} from 'react';
import logo from "../logo.svg";
import {ThemeSwitchContext} from "../contexts/ThemeSwitchContext";
function Dashboard(props) {
    const {theme} = useContext(ThemeSwitchContext);
    return (
        <header className={"App-header " + theme}>
            <img src={logo} className="App-logo" alt="logo" />
            <p className={(theme === 'light' ? " text-primary" : '')}>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className={"App-link" + (theme === 'light' ? " text-primary" : '')}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}
export default Dashboard;