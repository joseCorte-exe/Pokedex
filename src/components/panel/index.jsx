import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import './style.css'

export default function Panel({hp, atttack, defense, type, height, weight}) {

    const app = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon' })

    const pokeName = useParams().name

    const [abilities, setAbilities] = useState([])
    const [moves, setMoves] = useState([])
    
    useEffect(() => {
        app.get(`/${pokeName}`)
        .then(res => (setAbilities(res.data.abilities)))
        .catch(err => console.log(err))

        app.get(`/${pokeName}`)
        .then(res => (setMoves(res.data.moves)))
        .catch(err => console.log(err))
        }, [])

        // console.log(moves.map(move => move.move.name))

    return (
        <main className='panel' >
            <section>
                <header className='panel-header'>
                    <h4>height: {height}</h4>
                    <dev-divisor/>
                    <h4>weight: {weight}</h4>
                    <dev-divisor/>
                    <h4>hp: {hp}</h4>
                    <dev-divisor/>
                    <h4>attack: {atttack}</h4>
                    <dev-divisor/>
                    <h4>defense: {defense}</h4>
                    <dev-divisor/>
                    <h4>type: {type}</h4>
                </header>
                <hr></hr>
                <article className='panel-article'>
                    <section>
                        <h3>Abilities</h3>
                        <ul>
                            {
                                abilities.map(ability => (<li key={ability.ability.name}>{ability.ability.name}</li>))
                            }
                        </ul>
                    </section>
                    
                    <section>
                        <h3>Moves</h3>
                        <ul>
                            {
                                moves.slice(0, 5).map(moves => (<li key={moves.move.name}>{moves.move.name}</li>))
                            }
                        </ul>
                    </section>
                </article>
            </section>
        </main>
    )
}
