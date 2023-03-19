import {createContext, useState} from "react";
import Speakers from "./Speakers";
import Header from "./Header";

export const ThemeContext = createContext();

function App({ speakers }) {
    const[theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <div className={theme === "light" ?
                "container-fluid light" : "container-fluid dark"}>
                <Header />
                <Speakers />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;