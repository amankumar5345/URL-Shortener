import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return (
        <div className="theme-toggle">
            <button className="button" type="button" onClick={() => setDarkMode((prev) => !prev)}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
};

export default ThemeToggle;
