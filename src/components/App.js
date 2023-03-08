import {useState} from "react";
import Speakers from "./Speakers";
import Header from "./Header";

function App({ speakers }) {
    const[theme, setTheme] = useState("light")

    return (
        <div className={theme === "light" ?
            "container-fluid light" : "container-fluid dark"}>
            <Header theme={theme} />
            <Speakers theme={theme} setTheme={setTheme} />
        </div>
    );
}

export default App;