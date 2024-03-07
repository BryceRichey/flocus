import {
    createContext,
    useState,
    useEffect
} from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('isDarkMode') === 'true'
    );

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export {
    ThemeProvider,
}

export default ThemeContext;