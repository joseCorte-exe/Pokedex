import React from 'react'

import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return (
        <header>
            <ul>
                <Link to='/home'> <li>PokeCodex</li> </Link>
                <input />
            </ul>
        </header>
    )
}
