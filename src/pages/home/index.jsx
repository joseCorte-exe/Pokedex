import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from '../../components/card'

import './style.css'

export default function Home() {

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50', // max limit is 898
    });

    const [poke, setPoke] = useState([]);

    let pokeImg = []
    let i=1;

    useEffect(() => {
        app.get('/')
            .then(res => (setPoke(res.data.results)))

        }, [])

    for (let i = 0; i <= 1118; i++) {
        pokeImg.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    }

    function handleCounter() {
        i++
    }

    return (
        <div className='home-container'>
            <div className='home-content'>
                {
                    poke.map(poke => [<Link to={`/pokemon/${poke.name}`} className='link' ><Card name={poke.name} number='' img={pokeImg[i]} /></Link>, [handleCounter()]])
                }   
            </div>
        </div>
    )
}
