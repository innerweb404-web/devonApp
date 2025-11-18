import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import '../styles/components.css';
import { FaBars, FaHeart } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        const handleBodyClick = () => {
            if (isOpen) setIsOpen(false);
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [isOpen]);

    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <h2>Devon</h2>
                    <FaHeart color='purple' size={30} />
                </div>

                <FaBars
                    size={30}
                    color='purple'
                    className="menu-icon"
                    onClick={(e) => {
                        e.stopPropagation(); // prevent body from closing it
                        toggleMenu();
                    }}
                    style={{ cursor: 'pointer' }}
                />
            </header>

            <NavBar
                isOpen={isOpen}
                toggleMenu={toggleMenu}
            />
        </>
    );
}

export default Header;
