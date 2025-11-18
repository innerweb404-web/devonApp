import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import HomePage from '../pages/HomePage'
import '../styles/global.css'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const closeMenuOnBodyClick = () => {
        if (isOpen) setIsOpen(false)
    }

    return (
        <main 
            className='main-container'
            onClick={closeMenuOnBodyClick}   // 👈 CLICK BODY TO CLOSE NAV
        >
            <Header toggleMenu={toggleMenu} />
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            <HomePage />
        </main>
    )
}

export default Layout
