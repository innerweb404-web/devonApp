import React from 'react'
import Header from '../components/Header'
import '../styles/global.css'
import HomePage from '../pages/HomePage'

const Layout = () => {
    return (
        <main className='main-container'>
            <Header />
            <HomePage/>
        </main>
    )
}

export default Layout;
