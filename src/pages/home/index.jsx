import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from '../../components/card'

import './style.css'

export default function Home() {

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898', // max limit is 898
    });

    const [poke, setPoke] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const pages = 18;
    const startIndex = currentPage * 50;
    const endIndex = startIndex + 50;
    const currentPoke = poke.slice(startIndex, endIndex);

    let pokeImg = []

    useEffect(() => {
        app.get('/')
            .then(res => (setPoke(res.data.results)))

        }, [])

    for (let i = 0; i <= 1118; i++) {
        pokeImg.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    }

    function image(i) {
        return pokeImg[i]
    }

    console.log(poke)

    return (
        <main className='home-container'>
            <section className='home-content'>
                {
                    currentPoke.map((poke, index) => [<Link to={`/pokemon/${poke.name}`} className='link' ><Card name={poke.name} number='' img={image(startIndex + index + 1)} /></Link>])
                }   
            </section>
            <section>
                {Array.from(Array(pages), (item, index) => {
                    return <button className='btn-page' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >{index}</button>
                })}
            </section>
        </main>
    )
}
