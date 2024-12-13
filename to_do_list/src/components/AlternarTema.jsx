import { useEffect, useState } from "react";


function AlternarTema () {

    const [isDarkMode, setIsDarkMode] = useState( () => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect( () => {
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 bg-gray-200"
            >
                {isDarkMode ? '🌙' : '☀️'}
            </button>
        </>
    )
}

export default AlternarTema;