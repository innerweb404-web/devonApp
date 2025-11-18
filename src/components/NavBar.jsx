import React, { useEffect, useState } from 'react';
import '../styles/components.css';
import { FaTimes, FaMoon, FaSun } from "react-icons/fa";

const NavBar = ({ isOpen, toggleMenu }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <nav 
            className={`navbar ${isOpen ? 'open' : ''}`}
            onClick={(e) => e.stopPropagation()}   // <-- IMPORTANT
        >
            <div className='closeIcon'>
                <FaTimes
                    size={30}
                    className='FaTimes'
                    color='purple'
                    onClick={(e) => {
                        e.stopPropagation(); // prevents body click
                        toggleMenu();
                    }}
                />

                {theme === 'light' ? (
                    <FaMoon size={24} color='purple' onClick={toggleTheme} />
                ) : (
                    <FaSun size={24} color='purple' onClick={toggleTheme} />
                )}
            </div>

            <ul className='list'>
                <li className='list-items'><a href="#home">Home</a></li>
                <li className='list-items'><a href="#favorites">Favorites</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
