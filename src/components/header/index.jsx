import React from 'react'

import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return (
        <header className='header-nav'>
                <Link to='/' className='link' >PokeCodex</Link>
                <input placeholder='procure por um pokemom' />
        </header>
    )
}
