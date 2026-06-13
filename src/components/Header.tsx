import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for styling

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">URL Shortener</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;