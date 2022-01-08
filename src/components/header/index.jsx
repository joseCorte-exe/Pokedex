import React from 'react'

import Logo from '../../assets/pokemonLogo.svg'

import { Link } from "react-router-dom";

import './style.css'

export default function Header() {
    return (
        <header className='header-nav'>
                <Link to='/' className='link' ><img src={Logo} width={'250px'}/></Link>
                {/* <img src={Logo}/> */}
                <input placeholder='procure por um pokemom' />
        </header>
    )
}
