import React from 'react'

import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return (
        <header>
                <Link to='/home'> <a>PokeCodex</a> </Link>
                <input />
        </header>
    )
}
