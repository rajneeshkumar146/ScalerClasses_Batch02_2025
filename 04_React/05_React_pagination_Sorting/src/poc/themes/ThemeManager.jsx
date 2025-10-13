import React from 'react'
import { useState } from 'react';
import Article from './Article'
import Footer from './Footer'
import Header from './Header'


function ThemeManager() {

    const toggleTheme = () => {
        console.log("Smile please!!!");
    }


    return <>
        <h1>Theme Manager</h1>
        <button
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
        <Header />
        <Footer />
        <Article />

    </>
}

export default ThemeManager;
