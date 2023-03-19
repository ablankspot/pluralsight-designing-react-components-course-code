import { useState } from "react";

function useTheme(initialTheme = "light") {
    const [theme, setTheme] = useState(initialTheme);
    
    function validateTheme(themeValue) {
        if (themeValue === "dark") setTheme("dark")
        else setTheme("light")
    };

    return {
        theme,
        setTheme: validateTheme,
    };
}

export default useTheme;