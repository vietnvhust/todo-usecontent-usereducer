import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/shares/Header";
import Button from "./components/shares/Button";
import ThemeContextToggleProvider from "./contexts/ThemeToggleContext";
import ThemeSwitchContextProvider from "./contexts/ThemeSwitchContext";
function App() {
    return (
        <div className="App">
            <ThemeSwitchContextProvider>
                <Header/>
                <Dashboard/>
                <ThemeContextToggleProvider>
                    <Button/>
                </ThemeContextToggleProvider>
            </ThemeSwitchContextProvider>
        </div>
    );
}
export default App;