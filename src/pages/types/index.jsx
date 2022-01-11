import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'


import Header from '../../components/header'
import Card from '../../components/card'

export default function PerTypes() {

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/', // max limit is 898
    });

    const typeName = useParams().type;

    const [poke, setPoke] = useState([]);

    useEffect(() => {
        app.get(`type/${typeName}`)
            .then(res => (setPoke(res.data.pokemon)))
    }, [])

    return (
        <main className='pertypes-container'>
            <Header />
            {
                poke.map(poke => (<Link to={`/pokemon/${poke.pokemon.name}`} className='link' ><Card name={poke.pokemon.name} /></Link>))
            }
        </main>
    )
}
